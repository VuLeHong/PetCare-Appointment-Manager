import api from '@/lib/api';
import { AppointmentRequest } from '@/types';

const MOCK: AppointmentRequest[] = [
  {
    id: 1,
    owner_name: 'Nguyễn Văn A',
    phone: '0912345678',
    pet_type: 'dog',
    symptoms: 'Bỏ ăn 2 ngày',
    status: 'pending',
    created_at: '2025-01-01',
  },
];

export const appointmentService = {
  // POST /appointment-requests
  create: async (
    data: Omit<AppointmentRequest, 'id' | 'status' | 'created_at'>
  ): Promise<AppointmentRequest> => {
    // const res = await api.post('/appointment-requests', data);
    // return res.data;

    return {
      ...data,
      id: Date.now(),
      status: 'pending',
      created_at: new Date().toISOString(),
    };
  },

  // GET /appointment-requests
  getAll: async (): Promise<AppointmentRequest[]> => {
    // const res = await api.get('/appointment-requests');
    // return res.data;

    return MOCK;
  },

  // PATCH /appointment-requests/:id
  updateStatus: async (
    id: number,
    status: 'pending' | 'accepted'
  ): Promise<void> => {
    // await api.patch(`/appointment-requests/${id}`, { status });

    return;
  },
};