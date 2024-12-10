import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/footer/Footer';
import { Home } from './pages/Home';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { BestSelling } from './pages/BestSelling';
import { OurFavorites } from './pages/OurFavorites';
import { Sale } from './pages/Sale';
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
import { Checkout } from './pages/Checkout';
import { Signup } from './pages/Signup';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Faqs } from './pages/Faqs'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;