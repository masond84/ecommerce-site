import { create } from 'zustand';
import Cookies from 'js-cookie';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const CART_COOKIE_NAME = 'cart_items';

export const useCartStore = create<CartStore>((set) => ({
  // Initialize cart from cookies
  items: JSON.parse(Cookies.get(CART_COOKIE_NAME) || '[]'),

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        alert('This product is already in your cart.');
        return state;
      }
      const updatedItems = [...state.items, item];
      // Save to cookies
      Cookies.set(CART_COOKIE_NAME, JSON.stringify(updatedItems), { expires: 7 });
      return { items: updatedItems };
    }),

  removeItem: (itemId) =>
    set((state) => {
      const updatedItems = state.items.filter((i) => i.id !== itemId);
      // Update cookies
      Cookies.set(CART_COOKIE_NAME, JSON.stringify(updatedItems), { expires: 7 });
      return { items: updatedItems };
    }),

  updateQuantity: (itemId, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      );
      // Update cookies
      Cookies.set(CART_COOKIE_NAME, JSON.stringify(updatedItems), { expires: 7 });
      return { items: updatedItems };
    }),

  clearCart: () => {
    // Clear cookies and reset cart state
    Cookies.remove(CART_COOKIE_NAME);
    set({ items: [] });
  },
}));
