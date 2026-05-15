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
    const res = await api.get('/products');
    console.log(res)
    return res.data;
    // return MOCK;
  },

  getById: async (id: number): Promise<Product> => {
    const res = await api.get(`/products/${id}`);
    return res.data;
    // return MOCK.find((p) => p.id === id)!;
  },

    // POST /products
create: async (data: FormData): Promise<Product> => {
  const res = await api.post('/products', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
},

    // PATCH /products/:id
update: async (
  id: number,
  data: FormData
): Promise<Product> => {
  const res = await api.put(`/products/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
},

  // DELETE /products/:id
  delete: async (id: number): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};