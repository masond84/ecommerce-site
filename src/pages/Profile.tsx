import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { LoginForm } from '../components/auth/LoginForm';
import api from '../services/api';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch orders when the user is authenticated
      const fetchOrders = async () => {
        try {
          const response = await api.get(`/orders/user/${user?.id}`); // Fetch orders for this user
          setOrders(response.data);
        } catch (err) {
          console.error('Error fetching orders:', err);
          setError('Failed to fetch your orders. Please try again later.');
        }
      };
      fetchOrders();
    }
  }, [isAuthenticated, user]);

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
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <p className="mt-1 text-lg capitalize">{user?.role}</p>
          </div>
      </div>

      <h2 className='text-xl font-bold mt-6'>Your Orders</h2>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <ul className="mt-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id} className="bg-gray-100 p-4 mb-2 rounded">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ${order.total}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">You have no orders yet.</p>
        )}
      </ul>
      
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