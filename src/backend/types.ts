import { Principal } from '@dfinity/principal';

export type ProductId = number;
export type Price = bigint;

export interface Product {
    id: ProductId;
    name: string;
    description: string;
    price: Price;
    imageUrl: string;
    owner: Principal;
    isForSale: boolean;
    nftId: string | null;
}

export interface NFTMetadata {
    authenticity: string;
    purchaseDate: bigint;
    serialNumber: string;
}

export interface NFT {
    id: string;
    productId: ProductId;
    owner: Principal;
    metadata: NFTMetadata;
}

export interface User {
    principal: Principal;
    products: ProductId[];
    nfts: string[];
}

// Actor interface for TypeScript
export interface MarketplaceActor {
    isAuthenticated: () => Promise<boolean>;
    createProduct: (name: string, description: string, price: bigint, imageUrl: string) => Promise<ProductId>;
    mintNFT: (productId: ProductId, serialNumber: string) => Promise<string | null>;
    getProduct: (id: ProductId) => Promise<Product | null>;
    getAllProducts: () => Promise<Product[]>;
    getNFT: (id: string) => Promise<NFT | null>;
}
