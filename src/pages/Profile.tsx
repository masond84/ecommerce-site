import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const { user, isAuthenticated, logout } = useAuthStore();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        // Redirect to Auth page if not logged in
        navigate('/auth');
        return null;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-6">Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <p className="mt-1 text-lg">{user.name}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-lg">{user.email}</p>
                    </div>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};
