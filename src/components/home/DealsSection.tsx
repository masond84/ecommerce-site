import { Link } from 'react-router-dom';
import { Clock, Truck, Sparkle } from 'lucide-react';

export const DealsSection = () => {
  return (
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/category/electronics" className="group">
              <div className="bg-green-600 text-white rounded-lg p-8 transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Local Warehouse</h3>
                <p className="text-lg mb-4">Fast Delivery from $1.99</p>
                <div className="flex items-center">
                  <Truck className="h-6 w-6 mr-2" />
                  <span>Shop Now →</span>
                </div>
              </div>
            </Link>

            <Link to="/deals" className="group">
              <div className="bg-orange-500 text-white rounded-lg p-8 transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Our Personal Favorites</h3>
                <p className="text-lg mb-4">Save up to $50</p>
                <div className="flex items-center">
                  <Sparkle className="h-6 w-6 mr-2" />
                  <span>View Deals →</span>
                </div>
              </div>
            </Link>

            <Link to="/flash-sale" className="group">
              <div className="bg-red-600 text-white rounded-lg p-8 transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Super Discount</h3>
                <p className="text-lg mb-4">Up to 50% Off</p>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  <span>Grab Now →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}
