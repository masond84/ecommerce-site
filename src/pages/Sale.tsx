import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Clock, Percent } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const Sale = () => {
  const { products, loading } = useProducts('Clothing');

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-red-600 text-white rounded-xl p-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Special Sale</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Limited time offers on selected items. Don't miss out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <Tag className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Up to 70% Off</h3>
            <p className="opacity-90">Massive discounts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Limited Time</h3>
            <p className="opacity-90">While stocks last</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <Percent className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Extra Savings</h3>
            <p className="opacity-90">Additional discounts</p>
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