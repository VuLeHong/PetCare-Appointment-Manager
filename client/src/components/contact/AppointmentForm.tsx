'use client';

import { useState } from 'react';
import { appointmentService } from '@/services/appointmentService';

type Form = {
  owner_name: string;
  phone: string;
  pet_type: 'dog' | 'cat';
  symptoms: string;
};

export default function AppointmentForm() {
  const [form, setForm] = useState<Form>({
    owner_name: '',
    phone: '',
    pet_type: 'dog',
    symptoms: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k: keyof Form, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }));
  };

  const submit = async () => {
    if (!form.owner_name || !form.phone) return;

    setLoading(true);

    try {
      await appointmentService.create(form);
      setSuccess(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="text-xl font-bold mb-2">
          Gửi thành công
        </div>
        <p className="text-vc-sub mb-6">
          Chúng tôi sẽ liên hệ lại sớm.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="bg-vc-primary text-white px-6 py-2 rounded-vc"
        >
          Gửi lại
        </button>
      </div>
    );
  }

  return (
    <>
      {/* NAME */}
      <input
        placeholder="Họ và tên"
        value={form.owner_name}
        onChange={(e) => update('owner_name', e.target.value)}
        className="w-full border border-vc rounded-vc px-4 py-2 mb-4"
      />

      {/* PHONE */}
      <input
        placeholder="Số điện thoại"
        value={form.phone}
        onChange={(e) => update('phone', e.target.value)}
        className="w-full border border-vc rounded-vc px-4 py-2 mb-4"
      />

      {/* PET TYPE */}
      <select
        value={form.pet_type}
        onChange={(e) =>
          update('pet_type', e.target.value as 'dog' | 'cat')
        }
        className="w-full border border-vc rounded-vc px-4 py-2 mb-4"
      >
        <option value="dog">Chó</option>
        <option value="cat">Mèo</option>
      </select>

      {/* SYMPTOMS */}
      <textarea
        placeholder="Mô tả triệu chứng"
        value={form.symptoms}
        onChange={(e) => update('symptoms', e.target.value)}
        className="w-full border border-vc rounded-vc px-4 py-2 mb-6"
      />

      {/* BUTTON */}
      <button
        onClick={submit}
        disabled={loading}
        className="w-full bg-vc-primary text-white py-3 rounded-vc"
      >
        {loading ? 'Đang gửi...' : 'Gửi yêu cầu'}
      </button>
    </>
  );
}