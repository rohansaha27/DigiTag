import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-xl shadow-lg text-center max-w-md">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">PURCHASE SUCCESSFUL!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>
        <button
          onClick={() => navigate('/marketplace')}
          className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Return to Marketplace
        </button>
      </div>
    </div>
  );
}