import { useState, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useSearchStore } from '../../store/useSearchStore';
import { useClickOutside } from '../../hooks/useClickOutside';

export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { query, setQuery } = useSearchStore();
  const searchRef = useRef<HTMLDivElement>(null);

  useClickOutside(searchRef, () => setIsExpanded(false));

  return (
      <div ref={searchRef} className="relative">
        {!isExpanded ? (
            <button
                onClick={() => setIsExpanded(true)}
                className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-5 w-5 text-gray-500" />
            </button>
        ) : (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
              <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                />
                <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
        )}
      </div>
  );
};
