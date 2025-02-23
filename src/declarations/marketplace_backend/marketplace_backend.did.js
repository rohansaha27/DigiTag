export const idlFactory = ({ IDL }) => {
  const ProductId = IDL.Nat32;
  const NFT = IDL.Record({
    'id' : IDL.Text,
    'owner' : IDL.Principal,
    'metadata' : IDL.Record({
      'authenticity' : IDL.Text,
      'purchaseDate' : IDL.Int,
      'serialNumber' : IDL.Text,
    }),
    'productId' : ProductId,
  });
  const Price = IDL.Nat64;
  const Product = IDL.Record({
    'id' : ProductId,
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
    'nftId' : IDL.Opt(IDL.Text),
    'price' : Price,
    'isForSale' : IDL.Bool,
  });
  return IDL.Service({
    'createProduct' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat64, IDL.Text],
        [ProductId],
        [],
      ),
    'getAllNFTs' : IDL.Func([], [IDL.Vec(NFT)], ['query']),
    'getAllProducts' : IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getNFT' : IDL.Func([IDL.Text], [IDL.Opt(NFT)], ['query']),
    'getProduct' : IDL.Func([ProductId], [IDL.Opt(Product)], ['query']),
    'isAuthenticated' : IDL.Func([], [IDL.Bool], []),
    'mintNFT' : IDL.Func([ProductId, IDL.Text], [IDL.Opt(IDL.Text)], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
