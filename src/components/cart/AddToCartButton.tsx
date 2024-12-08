import React from 'react';
import { useCartStore } from '../../store/useCartStore';
import { Product } from '../../types';

const AddToCartButton = ({ product }: { product: Product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem({ ...product, quantity: 1 })}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;


