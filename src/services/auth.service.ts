import { User } from '../types';

const MOCK_USER = {
  id: '1',
  name: 'Demo User',
  email: 'demo@example.com',
};

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
      return {
        user: MOCK_USER,
        token: 'mock-jwt-token'
      };
    }
    throw new Error('Invalid credentials');
  },

  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      user: {
        id: '2',
        name: data.name,
        email: data.email,
      },
      token: 'mock-jwt-token'
    };
  },

  logout() {
    localStorage.removeItem('token');
  },
};
