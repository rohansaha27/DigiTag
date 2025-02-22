import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart } from 'lucide-react';

const product = {
  name: 'Luxury Watch',
  price: "$$",
  description: 'Exquisite timepiece crafted with precision and luxury in mind. Features premium materials and sophisticated design.',
  colors: ['UK 9', 'UK 10', 'UK 11', 'UK 12'],
  images: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400&h=400'
  ]
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate('/marketplace')}
        className="flex items-center space-x-2 text-gray-600 mb-8 hover:text-blue-400 transition-colors"
      >
        <ChevronLeft size={20} />
        <span>Back to Marketplace</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left - Thumbnail Images */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                selectedImage === index ? 'border-blue-400' : 'border-transparent'
              }`}
            >
              <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-32 object-cover" />
            </div>
          ))}
        </div>

        {/* Middle - Main Image */}
        <div className="lg:col-span-1">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Right - Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          
          <div>
            <h3 className="font-semibold mb-2">Available Sizes:</h3>
            <div className="flex space-x-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border rounded-full hover:border-blue-400 transition-colors"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="text-2xl font-bold text-blue-400">
            ${product.price.toLocaleString()}
          </div>

          <button
            onClick={() => navigate('/success')}
            className="w-full bg-blue-400 text-white py-4 rounded-full hover:bg-blue-500 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}