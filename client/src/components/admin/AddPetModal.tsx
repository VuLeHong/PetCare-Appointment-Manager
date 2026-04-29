'use client';

import { useState } from 'react';
import Modal from '../ui/Modal';
import { petService } from '@/services/petService';

interface Props {
  customerId: number; 
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddPetModal({ customerId, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: '',
    species: 'cat',
    color: '',
    age: '',
    weight: '',
    gender: 'male',
    notes: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

const handleSubmit = async () => {
  try {
    if (!form.name) {
      alert('Vui lòng nhập tên thú cưng');
      return;
    }

    const newPet = await petService.create(customerId, {
      name: form.name,
      species: form.species as 'dog' | 'cat',
      color: form.color,
      age: Number(form.age),
      weight: Number(form.weight),
      gender: form.gender as 'male' | 'female',
      notes: form.notes,
    });

    // notify parent to update list
    if (onSuccess) onSuccess();

    onClose();
  } catch (error) {
    console.error('Create pet error:', error);
  }
};

  return (
    <Modal title="Thêm thú cưng" onClose={onClose}>
  <div className="max-h-[70vh] overflow-y-auto pr-1">
    <div className="space-y-4">

        {/* Tên */}
        <div>
          <p className="text-sm text-vc-sub mb-1">Tên thú cưng</p>
          <input
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full border border-vc rounded-xl px-4 py-3"
            placeholder="Mochi"
          />
        </div>

        {/* Loài */}
        <div>
          <p className="text-sm text-vc-sub mb-1">Giống loài</p>
          <select
            value={form.species}
            onChange={e => handleChange('species', e.target.value)}
            className="w-full border border-vc rounded-xl px-4 py-3"
          >
            <option value="cat">🐱 Mèo</option>
            <option value="dog">🐶 Chó</option>
          </select>
        </div>

        {/* Màu */}
        <div>
          <p className="text-sm text-vc-sub mb-1">Màu lông</p>
          <input
            value={form.color}
            onChange={e => handleChange('color', e.target.value)}
            className="w-full border border-vc rounded-xl px-4 py-3"
            placeholder="Trắng cam"
          />
        </div>

        {/* Tuổi + cân nặng */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-vc-sub mb-1">Tuổi</p>
            <input
              type="number"
              value={form.age}
              onChange={e => handleChange('age', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <p className="text-sm text-vc-sub mb-1">Cân nặng (kg)</p>
            <input
              type="number"
              value={form.weight}
              onChange={e => handleChange('weight', e.target.value)}
              className="w-full border border-vc rounded-xl px-4 py-3"
            />
          </div>
        </div>

        {/* Giới tính */}
        <div>
          <p className="text-sm text-vc-sub mb-1">Giới tính</p>
          <select
            value={form.gender}
            onChange={e => handleChange('gender', e.target.value)}
            className="w-full border border-vc rounded-xl px-4 py-3"
          >
            <option value="male">Đực</option>
            <option value="female">Cái</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <p className="text-sm text-vc-sub mb-1">Đặc điểm</p>
          <textarea
            rows={3}
            value={form.notes}
            onChange={e => handleChange('notes', e.target.value)}
            className="w-full border border-vc rounded-xl px-4 py-3"
          />
        </div>

        {/* Action */}
        <button
          onClick={handleSubmit}
          className="w-full bg-vc-primary text-white py-3 rounded-xl font-semibold"
        >
          Thêm thú cưng
        </button>

      </div>
    </div>
    </Modal>
  );
}