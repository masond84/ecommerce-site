import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer/Footer';
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
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featured" element={<FeaturedProducts />} />
            <Route path="/category/electronics" element={<BestSelling />} />
            <Route path="/category/accessories" element={<OurFavorites />} />
            <Route path="/category/clothing" element={<Sale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;