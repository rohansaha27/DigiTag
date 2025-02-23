import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Types "./types";
import Nat32 "mo:base/Nat32";
import Time "mo:base/Time";
import Nat "mo:base/Nat";

actor Marketplace {
    // State variables
    private stable var nextProductId: Nat32 = 0;
    private var products = HashMap.HashMap<Types.ProductId, Types.Product>(
    0, 
    Nat32.equal, 
    func(x: Nat32) : Hash.Hash { Hash.hash(Nat32.toNat(x)) }
);

    private var nfts = HashMap.HashMap<Text, Types.NFT>(0, Text.equal, Text.hash);
    private var users = HashMap.HashMap<Principal, Types.User>(0, Principal.equal, Principal.hash);

    // Authentication
    public shared(msg) func isAuthenticated() : async Bool {
        return true;
        not Principal.isAnonymous(msg.caller)
    };

    // Product Management
    public shared(msg) func createProduct(
        name: Text,
        description: Text,
        price: Nat64,
        imageUrl: Text
    ) : async Types.ProductId {
        assert(not Principal.isAnonymous(msg.caller));
        
        let productId = nextProductId;
        nextProductId += 1;

        let product: Types.Product = {
            id = productId;
            name = name;
            description = description;
            price = price;
            imageUrl = imageUrl;
            owner = msg.caller;
            isForSale = true;
            nftId = null;
        };

        products.put(productId, product);
        productId
    };

    // NFT Management
    public shared(msg) func mintNFT(
        productId: Types.ProductId,
        serialNumber: Text
    ) : async ?Text {
        assert(not Principal.isAnonymous(msg.caller));
        
        switch (products.get(productId)) {
            case null { null };
            case (?product) {
                if (product.owner != msg.caller) {
                    return null;
                };

                let nftId = Principal.toText(msg.caller) # "-" # Nat32.toText(productId);
                let nft: Types.NFT = {
                    id = nftId;
                    productId = productId;
                    owner = msg.caller;
                    metadata = {
                        authenticity = "Verified";
                        purchaseDate = Time.now();
                        serialNumber = serialNumber;
                    };
                };

                nfts.put(nftId, nft);
                ?nftId
            };
        }
    };

    // Query functions
    public query func getProduct(id: Types.ProductId) : async ?Types.Product {
        products.get(id)
    };

    public query func getAllProducts() : async [Types.Product] {
        Iter.toArray(products.vals())
    };

    public query func getNFT(id: Text) : async ?Types.NFT {
        nfts.get(id)
    };
};
