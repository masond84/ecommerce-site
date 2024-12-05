import React, { useState } from 'react';

export const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });
    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const calculatePasswordStrength = (password: string) => {
        let strength = 0;
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasUpper) strength++;
        if (hasLower) strength++;
        if (hasNumber) strength++;
        if (hasSpecial) strength++;

        setPasswordStrength(strength);
    };

    const formatPhoneNumber = (phone: string) => {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length <= 3) {
            return cleaned;
        }
        if (cleaned.length <= 6) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        }
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        if (id === 'phoneNumber') {
            const numericValue = value.replace(/\D/g, '');
            if (numericValue.length > 10) return;
            const formattedPhone = formatPhoneNumber(numericValue);
            setFormData((prev) => ({ ...prev, [id]: formattedPhone }));
            return;
        }

        setFormData((prev) => ({ ...prev, [id]: value }));

        if (id === 'password') {
            calculatePasswordStrength(value);
        }

        if (id === 'confirmPassword' || id === 'password') {
            setPasswordsMatch(
                id === 'confirmPassword'
                    ? value === formData.password
                    : formData.confirmPassword === value
            );
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword, phoneNumber } = formData;

        if (!firstName || !lastName) {
            setError('First name and last name are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        if (!passwordsMatch) {
            setError('Passwords do not match.');
            return;
        }
        if (phoneNumber.replace(/\D/g, '').length !== 10) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }
        if (passwordStrength < 4) {
            setError('Please enter a strong password.');
            return;
        }

        setError('');
        console.log('Sign Up Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <div className="mt-2">
                    <p className="text-sm font-medium">Password Strength</p>
                    <div className="w-full h-2 bg-gray-200 rounded-md mt-1">
                        <div
                            className={`h-2 rounded-md ${
                                passwordStrength === 1
                                    ? 'bg-red-500'
                                    : passwordStrength === 2
                                        ? 'bg-yellow-500'
                                        : passwordStrength === 3
                                            ? 'bg-blue-500'
                                            : 'bg-green-500'
                            }`}
                            style={{ width: `${(passwordStrength / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                        formData.confirmPassword &&
                        (passwordsMatch ? 'border-green-500' : 'border-red-500')
                    }`}
                />
                {formData.confirmPassword && (
                    <p
                        className={`text-sm mt-2 ${
                            passwordsMatch ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {passwordsMatch
                            ? '✔️ Your passwords match!'
                            : '❌ Passwords do not match.'}
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Mobile Phone Number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
                Sign Up
            </button>
        </form>
    );
};
