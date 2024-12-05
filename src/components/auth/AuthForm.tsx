import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-200 pb-2">
                <button
                    className={`px-4 py-2 text-sm font-medium ${
                        !isSignUp ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                    }`}
                    onClick={() => setIsSignUp(false)}
                >
                    Sign In
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium ${
                        isSignUp ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                    }`}
                    onClick={() => setIsSignUp(true)}
                >
                    Sign Up
                </button>
            </div>

            {/* Render the respective form */}
            {isSignUp ? <SignUpForm /> : <LoginForm />}
        </div>
    );
};
