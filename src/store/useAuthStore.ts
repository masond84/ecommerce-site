import { create } from 'zustand';
import Cookies from 'js-cookie';
import { User } from '../types'; // Adjust the path to match your structure

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  users: User[]; // List of registered users
  login: (email: string, password: string, keepSignedIn: boolean) => string | null; // Returns error message if any
  register: (newUser: User) => void;
  logout: () => void;
}

const USER_COOKIE_NAME = 'auth_user';

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: JSON.parse(Cookies.get(USER_COOKIE_NAME) || 'null'),
  isAuthenticated: !!Cookies.get(USER_COOKIE_NAME),
  users: [], // Initial empty list of registered users

  login: (email, password, keepSignedIn) => {
    const { users } = get(); // Access current state
    const existingUser = users.find((user) => user.email === email);

    if (!existingUser) {
      return "This account doesn't exist. Please create one.";
    }

    // Add password validation here if needed

    set({ user: existingUser, isAuthenticated: true });

    if (keepSignedIn) {
      Cookies.set(USER_COOKIE_NAME, JSON.stringify(existingUser), { expires: 7 }); // Cookie valid for 7 days
    } else {
      Cookies.set(USER_COOKIE_NAME, JSON.stringify(existingUser)); // Session cookie (expires on browser close)
    }

    return null; // No error
  },

  register: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser], // Add the new user to the list
    })),

  logout: () => {
    Cookies.remove(USER_COOKIE_NAME);
    set({ user: null, isAuthenticated: false });
  },
}));
