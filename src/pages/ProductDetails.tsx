import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { mockProducts } from '../data/products';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <button
              onClick={() => navigate('/')}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
    );
  }

  return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <button
                onClick={() => addItem({ ...product, quantity: 1 })}
                className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
  );
};
