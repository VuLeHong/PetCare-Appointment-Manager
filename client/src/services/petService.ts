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
  getById: async (petId: number, customerId: number): Promise<Pet> => {
      const res = await api.get(`/customers/${customerId}/pets/${petId}`);
  return res.data;
  },

  // ✅ ADD THIS
getByCustomer: async (customerId: number): Promise<Pet> => {
  const res = await api.get(`/customers/${customerId}/pets`);
  return res.data;
},

create: async (
  customerId: number,
  data: Omit<Pet, 'id' | 'customer_id' | 'created_at' | 'image_url'>
): Promise<Pet> => {
  console.log('API CREATE CALLED');
  const res = await api.post(
    `/customers/${customerId}/pets`,
    data
  );
  return res.data;
},

  // PATCH /admin/pets/:id
  update: async (id: number, data: Partial<Pet>): Promise<Pet> => {
    return {
      ...(MOCK.find(p => p.id === id)!),
      ...data,
    };
  },
};