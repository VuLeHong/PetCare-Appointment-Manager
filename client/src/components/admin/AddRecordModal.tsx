'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { medicalRecordService } from '@/services/medicalRecordService';

interface Props {
  petId: number;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddRecordModal({ petId, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    visit_date: '',
    weight: '',
    symptoms: '',
    notes: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

const handleSubmit = async () => {
  try {
    if (!form.visit_date) {
      alert('Vui lòng chọn ngày khám');
      return;
    }

    await medicalRecordService.create(petId, {
      visit_date: form.visit_date,
      weight: Number(form.weight),
      symptoms: form.symptoms,
      notes: form.notes,
    });

    if (onSuccess) onSuccess();
    onClose();
  } catch (error) {
    console.error('Create medical record error:', error);
  }
};

  return (
    <Modal title="Thêm bệnh án" onClose={onClose}>
      <div className="flex flex-col max-h-[70vh]">

        {/* BODY SCROLL */}
        <div className="space-y-4 overflow-y-auto pr-1">

          {/* Ngày khám */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Ngày khám</p>
            <input
              type="date"
              value={form.visit_date}
              onChange={e => handleChange('visit_date', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>

          {/* Cân nặng */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Cân nặng (kg)</p>
            <input
              type="number"
              value={form.weight}
              onChange={e => handleChange('weight', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
              placeholder="4.5"
            />
          </div>

          {/* Triệu chứng */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Triệu chứng</p>
            <textarea
              rows={3}
              value={form.symptoms}
              onChange={e => handleChange('symptoms', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
              placeholder="Mô tả triệu chứng..."
            />
          </div>

          {/* Điều trị (optional nếu backend chưa có) */}
          {/* 
          <div>
            <p className="text-sm text-vc-sub mb-1">Điều trị</p>
            <textarea
              rows={3}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>
          */}

          {/* Ghi chú */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Ghi chú</p>
            <textarea
              rows={3}
              value={form.notes}
              onChange={e => handleChange('notes', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>

        </div>

        {/* FOOTER */}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-vc-primary text-white py-3 rounded-xl font-semibold"
        >
          Lưu bệnh án
        </button>

      </div>
    </Modal>
  );
}