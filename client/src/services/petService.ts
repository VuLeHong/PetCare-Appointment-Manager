import api from '@/lib/api';
import { Pet } from '@/types';

const MOCK: Pet[] = [
  {
    id: 1,
    customer_id: 1,
    name: 'Mochi',
    species: 'cat',
    color: 'Trắng',
    age: 2,
    weight: 4,
    gender: 'female',
    notes: '',
    image_url: '',
    created_at: '2025-01-01',
  },
];

export const petService = {
  // GET /admin/pets/:id
  getById: async (id: number): Promise<Pet> => {
    return MOCK.find(p => p.id === id)!;
  },

  // ✅ ADD THIS
  // GET /admin/customers/:id/pets
  getByCustomer: async (customerId: number): Promise<Pet[]> => {
    // const res = await api.get(`/admin/customers/${customerId}/pets`);
    // return res.data;

    return MOCK.filter(p => p.customer_id === customerId);
  },

  // POST /admin/customers/:id/pets
  create: async (
    customerId: number,
    data: Omit<Pet, 'id' | 'customer_id' | 'created_at'>
  ): Promise<Pet> => {
    return {
      ...data,
      id: Date.now(),
      customer_id: customerId,
      created_at: new Date().toISOString(),
    };
  },

  // PATCH /admin/pets/:id
  update: async (id: number, data: Partial<Pet>): Promise<Pet> => {
    return {
      ...(MOCK.find(p => p.id === id)!),
      ...data,
    };
  },
};