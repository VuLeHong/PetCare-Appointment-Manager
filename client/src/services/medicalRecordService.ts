import api from '@/lib/api';
import { MedicalRecord } from '@/types';

const MOCK: MedicalRecord[] = [
  {
    id: 1,
    pet_id: 1,
    customer_id: 1,
    visit_date: '2025-01-01',
    weight: 4,
    symptoms: 'Bỏ ăn',
    notes: '',
    created_at: '2025-01-01',
  },
];

export type CreateMedicalRecordDTO = {
  visit_date: string;
  weight: number;
  symptoms: string;
  notes: string;
};

export const medicalRecordService = {
  // GET /pets/:id/medical-records
  getByPet: async (petId: number): Promise<MedicalRecord[]> => {
    const res = await api.get(`/pets/${petId}/medical-records`);
    return res.data;

    // return MOCK.filter(r => r.pet_id === petId);
  },

  // POST /pets/:id/medical-records
  create: async (
    petId: number,
    data: CreateMedicalRecordDTO
  ) => {
    const res = await api.post(
      `/pets/${petId}/medical-records`,
      data
    );
    return res.data;
  },

  // PATCH /medical-records/:id
  update: async (
    id: number,
    data: Partial<MedicalRecord>
  ): Promise<MedicalRecord> => {
    const res = await api.patch(`/pets/${id}/medical-records`, data);
    return res.data;

    // return {
    //   ...(MOCK.find(r => r.id === id)!),
    //   ...data,
    // };
  },

  // DELETE /medical-records/:id
  delete: async (id: number): Promise<void> => {
    await api.delete(`/pets/${id}/medical-records`);

    // return;
  },
};