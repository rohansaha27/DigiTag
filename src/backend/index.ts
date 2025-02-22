import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { AuthClient } from '@dfinity/auth-client';
import { idlFactory } from './marketplace.did';
import type { MarketplaceActor } from './types';

class MarketplaceService {
    private actor: MarketplaceActor | null = null;
    private agent: HttpAgent | null = null;
    private authClient: AuthClient | null = null;

    constructor(private canisterId: string) {}

    async init() {
        this.authClient = await AuthClient.create();
        
        const isAuthenticated = await this.authClient.isAuthenticated();
        
        this.agent = new HttpAgent({
            host: process.env.DFX_NETWORK === 'local' ? 'http://localhost:8000' : 'https://ic0.app',
            identity: isAuthenticated ? this.authClient.getIdentity() : undefined,
        });

        if (process.env.DFX_NETWORK === 'local') {
            await this.agent.fetchRootKey();
        }

        this.actor = Actor.createActor<MarketplaceActor>(idlFactory, {
            agent: this.agent,
            canisterId: this.canisterId,
        });
    }

    async login(): Promise<boolean> {
        if (!this.authClient) return false;

        return new Promise((resolve) => {
            this.authClient!.login({
                identityProvider: process.env.DFX_NETWORK === 'local' 
                    ? `http://localhost:8000?canisterId=${process.env.INTERNET_IDENTITY_CANISTER_ID}`
                    : 'https://identity.ic0.app',
                onSuccess: () => resolve(true),
                onError: () => resolve(false),
            });
        });
    }

    async logout() {
        if (this.authClient) {
            await this.authClient.logout();
            await this.init(); // Reinitialize with anonymous identity
        }
    }

    async createProduct(
        name: string,
        description: string,
        price: bigint,
        imageUrl: string
    ) {
        if (!this.actor) throw new Error('Actor not initialized');
        return this.actor.createProduct(name, description, price, imageUrl);
    }

    async mintNFT(productId: number, serialNumber: string) {
        if (!this.actor) throw new Error('Actor not initialized');
        return this.actor.mintNFT(productId, serialNumber);
    }

    async getProduct(id: number) {
        if (!this.actor) throw new Error('Actor not initialized');
        return this.actor.getProduct(id);
    }

    async getAllProducts() {
        if (!this.actor) throw new Error('Actor not initialized');
        return this.actor.getAllProducts();
    }

    async getNFT(id: string) {
        if (!this.actor) throw new Error('Actor not initialized');
        return this.actor.getNFT(id);
    }
}

export const marketplaceService = new MarketplaceService(
    process.env.MARKETPLACE_CANISTER_ID || 'rrkah-fqaaa-aaaaa-aaaaq-cai'
);
