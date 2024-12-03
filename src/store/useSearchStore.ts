import { create } from 'zustand';

interface SearchStore {
  query: string;
  category: string;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  category: '',
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
}));