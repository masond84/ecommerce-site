import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock order submission - replace with actual API call
    clearCart();
    navigate('/profile');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border"
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border"
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border"
                      required
                  />
                  <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border"
                      required
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border"
                    required
                />
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
  );
};
