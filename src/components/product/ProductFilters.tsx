import React from 'react';
import { useSearchStore } from '../../store/useSearchStore';

const categories = ['All', 'Electronics', 'Accessories', 'Clothing'];

export const ProductFilters = () => {
  const { category, setCategory } = useSearchStore();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat === 'All' ? '' : cat)}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              category === (cat === 'All' ? '' : cat)
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};