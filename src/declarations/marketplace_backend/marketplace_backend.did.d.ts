import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface NFT {
  'id' : string,
  'owner' : Principal,
  'metadata' : {
    'authenticity' : string,
    'purchaseDate' : bigint,
    'serialNumber' : string,
  },
  'productId' : ProductId,
}
export type Price = bigint;
export interface Product {
  'id' : ProductId,
  'owner' : Principal,
  'name' : string,
  'description' : string,
  'imageUrl' : string,
  'nftId' : [] | [string],
  'price' : Price,
  'isForSale' : boolean,
}
export type ProductId = number;
export interface _SERVICE {
  'createProduct' : ActorMethod<[string, string, bigint, string], ProductId>,
  'getAllNFTs' : ActorMethod<[], Array<NFT>>,
  'getAllProducts' : ActorMethod<[], Array<Product>>,
  'getNFT' : ActorMethod<[string], [] | [NFT]>,
  'getProduct' : ActorMethod<[ProductId], [] | [Product]>,
  'isAuthenticated' : ActorMethod<[], boolean>,
  'mintNFT' : ActorMethod<[ProductId, string], [] | [string]>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
