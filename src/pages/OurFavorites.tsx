import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, ThumbsUp } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const OurFavorites = () => {
  const { products, loading } = useProducts('Accessories');

  if (loading) {
    return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    );
  }

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Favorites</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand-picked selections from our expert team
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Staff Picks</h3>
              <p className="text-gray-600">Curated by our experts</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the best makes the cut</p>
            </div>
            <div className="text-center">
              <ThumbsUp className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Customer Favorites</h3>
              <p className="text-gray-600">Highly recommended</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
          ))}
        </div>
      </div>
  );
};
