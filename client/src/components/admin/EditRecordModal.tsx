'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { MedicalRecord } from '@/types';
import { medicalRecordService } from '@/services/medicalRecordService';

interface Props {
  record: MedicalRecord;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function EditRecordModal({ record, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    visit_date: record.visit_date,
    weight: String(record.weight),
    symptoms: record.symptoms,
    notes: record.notes || '',
  });

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

const handleSubmit = async () => {
  try {
    await medicalRecordService.update(record.id, {
      visit_date: form.visit_date,
      weight: Number(form.weight),
      symptoms: form.symptoms,
      notes: form.notes,
    });

    if (onSuccess) onSuccess();
    onClose();
  } catch (error) {
    console.error('Update medical record error:', error);
  }
};

  return (
    <Modal title="Chỉnh sửa bệnh án" onClose={onClose}>
      <div className="flex flex-col max-h-[70vh]">

        {/* BODY */}
        <div className="space-y-4 overflow-y-auto pr-1">

          {/* Ngày */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Ngày khám</p>
            <input
              type="date"
              value={form.visit_date}
              onChange={e => handleChange('visit_date', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>

          {/* Weight */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Cân nặng (kg)</p>
            <input
              type="number"
              value={form.weight}
              onChange={e => handleChange('weight', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>

          {/* Symptoms */}
          <div>
            <p className="text-sm text-vc-sub mb-1">Triệu chứng</p>
            <textarea
              rows={3}
              value={form.symptoms}
              onChange={e => handleChange('symptoms', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>

          {/* Notes */}
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
          Cập nhật bệnh án
        </button>

      </div>
    </Modal>
  );
}