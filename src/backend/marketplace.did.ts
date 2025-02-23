export const idlFactory = ({ IDL }) => {
  const ProductId = IDL.Nat32;
  const Price = IDL.Nat64;
  const Product = IDL.Record({
    'id': ProductId,
    'name': IDL.Text,
    'description': IDL.Text,
    'price': Price,
    'imageUrl': IDL.Text,
    'owner': IDL.Principal,
    'isForSale': IDL.Bool,
    'nftId': IDL.Opt(IDL.Text),
  });
  
  const NFTMetadata = IDL.Record({
    'authenticity': IDL.Text,
    'purchaseDate': IDL.Int,
    'serialNumber': IDL.Text,
  });
  
  const NFT = IDL.Record({
    'id': IDL.Text, 
    'productId': ProductId,
    'owner': IDL.Principal,
    'metadata': NFTMetadata,
  });

  return IDL.Service({
    'isAuthenticated': IDL.Func([], [IDL.Bool], []),
    'createProduct': IDL.Func(
      [IDL.Text, IDL.Text, Price, IDL.Text],
      [ProductId],
      [],
    ),
    'mintNFT': IDL.Func([ProductId, IDL.Text], [IDL.Opt(IDL.Text)], []),
    'getProduct': IDL.Func([ProductId], [IDL.Opt(Product)], ['query']),
    'getAllProducts': IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getNFT': IDL.Func([IDL.Text], [IDL.Opt(NFT)], ['query']),
  });
};
