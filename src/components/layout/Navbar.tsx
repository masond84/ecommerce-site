import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { TopBanner } from './TopBanner';
import { SearchBar } from './SearchBar';
import { Navigation } from './Navigation';
import { useAuthStore } from '../../store/useAuthStore';

export const Navbar = () => {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { isAuthenticated, logout } = useAuthStore();
  
  return (
    <header>
      <TopBanner />
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8 flex-1">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">ShopHub</span>
              </Link>
              <Navigation />
            </div>

            {/* Search, Cart, and Profile */}
            <div className="flex items-center space-x-6">
              <SearchBar />
              {/* Cart */}
              <Link
                to="/cart"
                className="relative text-gray-600 hover:text-gray-900"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Profile/Login/Signup */}
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};