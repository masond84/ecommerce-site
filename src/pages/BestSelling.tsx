import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Star, Timer } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const BestSelling = () => {
    const { products, loading } = useProducts('Electronics');

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
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Selling Products</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our most popular items loved by customers worldwide
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                    <Truck className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
                    <p className="text-gray-600">Free delivery on orders over $50</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <Star className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Top Rated</h3>
                    <p className="text-gray-600">Highly rated by our customers</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <Timer className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Limited Time</h3>
                    <p className="text-gray-600">Special offers available now</p>
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
