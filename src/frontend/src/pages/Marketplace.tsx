import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Watch, Gem as GemRing, Shirt, Crown, CircleDollarSign, Import, User, Shovel as Shoe, ShoppingCart } from 'lucide-react';

const categories = [
  { 
    name: 'BAGS',
    icon: ShoppingBag,
    products: [
      { id: 1, name: 'Hermes Birkin', price: 45999, image: 'https://images.unsplash.com/photo-1614180875515-39e26f846ebe?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 2, name: 'Chanel Classic', price: 32999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 3, name: 'Louis Vuitton Neverfull', price: 28999, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 4, name: 'Gucci Marmont', price: 25999, image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 5, name: 'Prada Galleria', price: 29999, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 6, name: 'Dior Saddle', price: 31999, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 7, name: 'Fendi Baguette', price: 27999, image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 8, name: 'Bottega Veneta Pouch', price: 26999, image: 'https://images.unsplash.com/photo-1590739225287-bd31519780c5?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 9, name: 'Saint Laurent Sac', price: 24999, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400&h=400' },
    ]
  },
  { 
    name: 'WATCHES',
    icon: Watch,
    products: [
      { id: 1, name: 'Rolex Daytona', price: 89999, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 2, name: 'Patek Philippe Nautilus', price: 159999, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 3, name: 'Audemars Piguet Royal Oak', price: 129999, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 4, name: 'Omega Speedmaster', price: 45999, image: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 5, name: 'Cartier Santos', price: 55999, image: 'https://images.unsplash.com/photo-1619946928632-6b0c3c4c3086?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 6, name: 'IWC Portugieser', price: 65999, image: 'https://images.unsplash.com/photo-1619946928795-6a8484461254?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 7, name: 'Vacheron Constantin', price: 145999, image: 'https://images.unsplash.com/photo-1619946928686-aae3c8c35a07?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 8, name: 'Jaeger-LeCoultre', price: 75999, image: 'https://images.unsplash.com/photo-1619946928371-e8c888467d11?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 9, name: 'A. Lange & Söhne', price: 135999, image: 'https://images.unsplash.com/photo-1619946928426-2f0d35d0575f?auto=format&fit=crop&q=80&w=400&h=400' },
    ]
  },
  { 
    name: 'RINGS',
    icon: GemRing,
    products: [
      { id: 1, name: 'Cartier Love Ring', price: 35999, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400&h=400' },
      // Add more ring products...
    ]
  },
  { 
    name: 'DRESS',
    icon: Shirt,
    products: [
      { id: 1, name: 'Gucci Evening Gown', price: 42999, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400&h=400' },
      // Add more dress products...
    ]
  },
  { 
    name: 'NECKLACE',
    icon: Crown,
    products: [
      { id: 1, name: 'Cartier Diamond', price: 89999, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400&h=400' },
      // Add more necklace products...
    ]
  },
  { 
    name: 'BRACELETS',
    icon: CircleDollarSign,
    products: [
      { id: 1, name: 'Van Cleef Arpels', price: 55999, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400&h=400' },
      // Add more bracelet products...
    ]
  },
  { 
    name: 'SHOES',
    icon: Shoe,
    products: [
      { id: 1, name: 'Christian Louboutin', price: 12999, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400&h=400' },
      // Add more shoe products...
    ]
  },
  { 
    name: 'COLLECTION',
    icon: ShoppingCart,
    products: [] // This will be populated with items added to cart
  }
];

export default function Marketplace() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('BAGS');
  const [cartItems, setCartItems] = useState([]);

  const currentCategory = categories.find(cat => cat.name === selectedCategory) || categories[0];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
            <User className="w-full h-full p-4 text-gray-600" />
          </div>
        </div>

        <nav className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                selectedCategory === category.name
                  ? 'bg-blue-400 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <category.icon size={16} />
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={() => navigate('/product/1')}
            className="ml-4 flex items-center space-x-2 bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors"
          >
            <Import size={16} />
            <span>IMPORT NFT</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-500 font-bold">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}