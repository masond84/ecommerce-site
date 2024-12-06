import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mockProducts } from '../../data/products';

export const CategoryHighlights = () => {
  const categories = ['Electronics', 'Accessories', 'Clothing'];

  const getCategoryProducts = (category: string) => {
    return mockProducts
        .filter(product => product.category === category)
        .slice(0, 4);
  };

  return (
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Your Interests
            </h2>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
                <div key={category}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                    <Link
                        to={`/category/${category.toLowerCase()}`}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                      View All
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getCategoryProducts(category).map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="p-4">
                              <h4 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h4>
                              <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
