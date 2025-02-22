import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/marketplace');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with logo */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-400 to-indigo-400 justify-center items-center p-12">
        <div className="text-center">
          <Shield size={120} className="text-white mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">DigiTag</h1>
          <p className="text-blue-50 text-lg">Secure & Authentic Transactions</p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">MEMBER LOGIN</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label className="block text-center mb-2 text-gray-600">Email</label>
              <Mail className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-center mb-2 text-gray-600">Password</label>
              <Lock className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 rounded-full hover:bg-blue-500 transition-colors font-semibold"
            >
              LOGIN
            </button>
          </form>
          <div className="absolute bottom-8 left-0 right-0 text-center space-y-2">
            <a href="#" className="text-blue-500 hover:underline block">
              Forgot Username/Password?
            </a>
            <a href="#" className="text-blue-500 hover:underline block">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}