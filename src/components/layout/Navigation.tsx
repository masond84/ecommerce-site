import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

const categories = [
  { name: 'Featured', path: '/featured' },
  { name: 'Best Selling', path: '/category/electronics' },
  { name: 'Our Favorites', path: '/category/accessories' },
  { name: 'Sale', path: '/category/clothing' },
];

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQs', path: '/faqs' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <nav className="flex items-center space-x-8">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className="font-montserrat font-semibold text-gray-600 hover:text-gray-900 text-sm"
        >
          {category.name}
        </Link>
      ))}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm font-medium"
        >
          <span>More</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className="font-montserrat font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {page.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};