import api from '@/lib/api';
import { Customer } from '@/types';

const MOCK: Customer[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    phone: '0912345678',
    created_at: '2025-01-01',
    pet_count: 2,
  },
];

export const customerService = {
  // GET /customers
  getAll: async (): Promise<Customer[]> => {
    // const res = await api.get('/customers');
    // return res.data;

    return MOCK;
  },
};