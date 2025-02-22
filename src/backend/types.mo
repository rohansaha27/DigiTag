// Product type definition
type ProductId = Nat32;
type Price = Nat64;

type Product = {
    id: ProductId;
    name: Text;
    description: Text;
    price: Price;
    imageUrl: Text;
    owner: Principal;
    isForSale: Bool;
    nftId: ?Text;
};

// NFT type definition
type NFT = {
    id: Text;
    productId: ProductId;
    owner: Principal;
    metadata: {
        authenticity: Text;
        purchaseDate: Int;
        serialNumber: Text;
    };
};

// User type definition
type User = {
    principal: Principal;
    products: [ProductId];
    nfts: [Text];
};
