import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './frontend/pages/Login';
import Marketplace from './frontend/pages/Marketplace';
import ProductDetail from './frontend/pages/ProductDetail';
import Success from './frontend/pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;