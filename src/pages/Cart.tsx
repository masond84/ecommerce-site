import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../components/cart/CartItem';
import { useCartStore } from '../store/useCartStore';

export const Cart = () => {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Your cart is empty</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total Price:</span>
              <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => clearCart()}
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
