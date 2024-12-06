import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { updateQuantity, removeItem } = useCartStore();

    return (
        <div className="flex items-center py-4 border-b">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1 ml-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 rounded-full hover:bg-gray-100"
                >
                    <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                >
                    <Plus className="h-4 w-4" />
                </button>
                <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 rounded-full hover:bg-gray-100 text-red-500"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};
