import React from 'react';
import { AuthForm } from '../components/auth/AuthForm';

export const Auth = () => {
    return (
        <div className="max-w-md mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Authentication</h1>
            <AuthForm />
        </div>
    );
};
