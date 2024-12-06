import { Truck, RotateCcw } from 'lucide-react';

export const TopBanner = () => {
  return (
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="h-4 w-4" />
              <span>90-day returns</span>
            </div>
          </div>
        </div>
      </div>
  );
};
