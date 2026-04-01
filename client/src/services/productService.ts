import api from '@/lib/api';
import { Product } from '@/types';
const MOCK: Product[] = [
  {
    id: 1,
    name: 'Royal Canin',
    category: 'food',
    brand: 'RC',
    price: 300000,
    unit: '1kg',
    description: '...',
    image_url: '',
    created_at: '',
  },
];

export const productService = {
  getAll: async (): Promise<Product[]> => {
    // const res = await api.get('/products');
    // return res.data;
    return MOCK;
  },

  getById: async (id: number): Promise<Product> => {
    // const res = await api.get(`/products/${id}`);
    // return res.data;
    return MOCK.find((p) => p.id === id)!;
  },

    // POST /admin/products
  create: async (
    data: Omit<Product, 'id' | 'created_at'>
  ): Promise<Product> => {
    return {
      ...data,
      id: Date.now(),
      created_at: new Date().toISOString(),
    };
  },

    // PATCH /admin/products/:id
  update: async (
    id: number,
    data: Partial<Product>
  ): Promise<Product> => {
    return {
      ...(MOCK.find(p => p.id === id)!),
      ...data,
    };
  },

  // DELETE /admin/products/:id
  delete: async (id: number): Promise<void> => {
    return;
  },
};