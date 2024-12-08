/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { BestSelling } from './pages/BestSelling';
import { OurFavorites } from './pages/OurFavorites';
import { Sale } from './pages/Sale';
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
import { Checkout } from './pages/Checkout';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featured" element={<FeaturedProducts />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/our-favorites" element={<OurFavorites />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { BestSelling } from './pages/BestSelling';
import { OurFavorites } from './pages/OurFavorites';
import { Sale } from './pages/Sale';
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
import { Checkout } from './pages/Checkout';
import { LoginForm }from './components/auth/LoginForm'; 
import { RegisterForm } from './components/auth/RegisterForm';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featured" element={<FeaturedProducts />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/our-favorites" element={<OurFavorites />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
