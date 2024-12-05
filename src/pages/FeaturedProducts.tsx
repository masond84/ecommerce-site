import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilters } from '../components/product/ProductFilters';
import { useSearchStore } from '../store/useSearchStore';
import { mockProducts } from '../data/products';

export const FeaturedProducts = () => {
  const { query, category } = useSearchStore();

  const filteredProducts = mockProducts.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !category || product.category === category;
    return matchesQuery && matchesCategory;
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};