import { mockProducts } from '../data/products';
import { Product } from '../types';

export const productService = {
  async getAllProducts(params?: { category?: string; search?: string }) {
    let products = [...mockProducts];

    if (params?.category) {
      products = products.filter(product => product.category === params.category);
    }

    if (params?.search) {
      const searchLower = params.search.toLowerCase();
      products = products.filter(product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    return products;
  },

  async getProductById(id: string) {
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new Error('Product not found');
    return product;
  },

  async getProductsByCategory(category: string) {
    return this.getAllProducts({ category });
  },

  async searchProducts(query: string) {
    return this.getAllProducts({ search: query });
  },
};
