import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { LoginForm } from '../components/auth/LoginForm';
import { Link } from 'react-router-dom';
import { Order } from '../types';

export const Profile = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    if (isAuthenticated) {
      const fetchOrders = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/orders', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }

          const data = await response.json();
          setOrders(data);
        } catch (err) {
          console.error('Error fetching orders:', err);
          setError('Failed to fetch your orders. Please try again later.');
        }
      };

      fetchOrders();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Sign In</h1>
        <LoginForm />
        <p className="mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {user?.name}</h1>
      <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-lg">{user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-lg">{user?.email}</p>
          </div>
      </div>

      <h2 className="text-xl font-bold mt-6">Your Orders</h2>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="bg-gray-100 p-4 mb-2 rounded">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId._id}>
                    {item.productId.name} x {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
      
      <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-6"
        >
          Sign Out
      </button>
    </div>
  </div>
  );
};