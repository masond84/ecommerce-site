import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  loadStoredAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,

  // Login action with token storage
  login: (user, token) => {
    set({ user, isAuthenticated: true, token });
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  },

  // Logout action with storage cleanup
  logout: () => {
    set({ user: null, isAuthenticated: false, token: null });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  // Load stored authentication from localStorage
  loadStoredAuth: () => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      set({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        token: storedToken,
      });
    }
  },
}));

// Initialize stored authentication on app load
useAuthStore.getState().loadStoredAuth();
