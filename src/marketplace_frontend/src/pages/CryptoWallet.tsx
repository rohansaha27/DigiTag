import { useNavigate } from 'react-router-dom';
import { Wallet, ArrowLeft, History, ArrowLeftRight, CreditCard } from 'lucide-react';
import img1 from '../../assets/bags/bag1.png';
import img2 from '../../assets/bags/bag2.png';
import img3 from '../../assets/bags/bag3.png';
import { marketplace_backend } from '../../../declarations/marketplace_backend/index';
import { NFT } from '../../../declarations/marketplace_backend/marketplace_backend.did';
import { useEffect, useState } from 'react';

function CryptoWallet() {
  const [hoveredNFT, setHoveredNFT] = useState<NFT | null>(null);
  const [showCard, setShowCard] = useState(false);
  const [nft, setNFT] = useState<NFT | null>(null);
  // useEffect(() => {
  //   marketplace_backend.getAllNFTs().then((nfts: NFT[]) => {
  //     console.log(nfts);
  //     const n = nfts[0];
  //     setNFT(n);
  //   })
  // }, [])
  const navigate = useNavigate();

  const handleClick = (index: Number) => {
    // if (index === 0) {
      console.log('clicked');
      window.location.href = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=2gsgt-vyaaa-aaaab-qacia-cai";
      // console.log(nft)
    //   marketplace_backend.getAllNFTs().then((nfts: NFT[]) => {
    //     console.log(nfts);
    //     const nft = nfts[0];
    //     setHoveredNFT(nft);
    //     setShowCard(true);
    //   });
    // }
    
  };


  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate('/marketplace')}
        className="flex items-center text-primary hover:text-deep-blue mb-6"
      >
        <ArrowLeft size={24} className="mr-2" />
        Back to Marketplace
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Wallet size={48} className="text-primary mr-4" />
          <h1 className="text-3xl font-bold">YOUR CRYPTO WALLET</h1>
        </div>

        {/* Updated Wallet Balance Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Wallet className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-1">Main Wallet</h2>
                <p className="text-gray-2">Connected to DigiTag</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-2">Available Balance</p>
                <p className="text-2xl font-bold text-primary">2.45 ETH</p>
                <p className="text-gray-2">≈ $9,281.93 CAD </p>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 btn-primary py-2 flex items-center justify-center space-x-2">
                  <ArrowLeftRight size={20} />
                  <span>Send</span>
                </button>
                <button className="flex-1 btn-primary py-2 flex items-center justify-center space-x-2">
                  <CreditCard size={20} />
                  <span>Receive</span>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Transactions Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-1 mb-6 flex items-center space-x-2">
              <History size={24} />
              <span>Recent Transactions</span>
            </h2>
            <div className="space-y-4">
              {[
                { type: 'Received', amount: '0.5 ETH', date: '2025-01-10', status: 'Completed' },
                { type: 'Sent', amount: '1.2 ETH', date: '2024-02-11', status: 'Completed' },
                { type: 'Received', amount: '0.3 ETH', date: '2023-03-12', status: 'Completed' },
              ].map((tx, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-1">{tx.type}</p>
                    <p className="text-sm text-gray-2">{tx.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-primary">{tx.amount}</p>
                    <p className="text-sm text-green-500">{tx.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NFT Collection Section */}
        <div className="md:col-span-2 bg-gray-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Your NFT Collection</h2>
          <div className="grid grid-cols-3 gap-4">
            {[img1, img2, img3].map((image, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm"
              onClick={() => handleClick(index)}>
                <img
                  src={image}
                  alt={`NFT ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <p className="font-medium">NFT #{index + 1}</p>
                <p className="text-sm text-gray-500">Owned since 2025</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hovered NFT Details Card */}
        {showCard && hoveredNFT && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-bold">NFT Details</h3>
            <p>ID: {hoveredNFT.id}</p>
            <p>Product ID: {hoveredNFT.productId}</p>
            <p>Owner: {hoveredNFT.owner.toText()}</p>
            <p>Authenticity: {hoveredNFT.metadata.authenticity}</p>
            <p>Purchase Date: {new Date(Number(hoveredNFT.metadata.purchaseDate / 1000000n)).toLocaleString()}</p>
            <p>Serial Number: {hoveredNFT.metadata.serialNumber}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default CryptoWallet;