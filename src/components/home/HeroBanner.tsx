import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
      <div className="relative bg-gradient-to-r from-orange-100 to-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Christmas Savings
                <span className="block text-red-600">Save Big!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Unbeatable discounts on your favorite products. Limited time offers available now!
              </p>
              <Link
                  to="/featured"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative">
              <img
                  src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
                  alt="Christmas Shopping"
                  className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
