import { CartItem } from '../types';

export interface OrderData {
  items: CartItem[];
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

const mockOrders: any[] = [];

export const orderService = {
  async createOrder(orderData: OrderData) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const newOrder = {
      id: Date.now().toString(),
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    mockOrders.push(newOrder);
    return newOrder;
  },

  async getUserOrders() {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockOrders;
  },

  async getOrderById(id: string) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const order = mockOrders.find(o => o.id === id);
    if (!order) throw new Error('Order not found');
    return order;
  },
};
