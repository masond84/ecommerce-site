import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilters } from '../components/product/ProductFilters';
import { Product } from '../types';
import { useSearchStore } from '../store/useSearchStore';
import axios from 'axios';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { category } = useSearchStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products dynamically based on the selected category
  const filteredProducts = category
      ? products.filter((product) => product.category === category)
      : products;


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
                  <Link key={product._id} to={`/product/${product._id}`}>
                    <ProductCard product={product} />
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};
