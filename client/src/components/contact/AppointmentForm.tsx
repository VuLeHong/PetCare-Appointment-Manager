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
      <div className="bg-white border border-vc rounded-2xl p-10 text-center">
        <div className="text-2xl font-bold mb-3">
          Đặt lịch thành công!
        </div>
        <p className="text-vc-sub mb-6">
          Chúng tôi sẽ gọi điện xác nhận trong vòng 30 phút.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="bg-vc-primary text-white px-6 py-3 rounded-vc"
        >
          Đặt lịch mới
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-vc rounded-2xl p-8">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-vc-main mb-6">
        Thông tin đặt lịch
      </h2>

      {/* NAME */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-vc-sub mb-2">
          Họ và tên
        </label>
        <input
          placeholder="Nguyễn Văn A"
          value={form.owner_name}
          onChange={(e) => update('owner_name', e.target.value)}
          className="w-full border border-vc rounded-vc px-4 py-3"
        />
      </div>

      {/* PHONE */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-vc-sub mb-2">
          Số điện thoại
        </label>
        <input
          placeholder="0912345678"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className="w-full border border-vc rounded-vc px-4 py-3"
        />
      </div>

      {/* PET TYPE */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-vc-sub mb-2">
          Loại thú cưng
        </label>
        <select
          value={form.pet_type}
          onChange={(e) =>
            update('pet_type', e.target.value as 'dog' | 'cat')
          }
          className="w-full border border-vc rounded-vc px-4 py-3"
        >
          <option value="dog">🐕 Chó</option>
          <option value="cat">🐱 Mèo</option>
        </select>
      </div>

      {/* SYMPTOMS */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-vc-sub mb-2">
          Mô tả triệu chứng
        </label>
        <textarea
          placeholder="Thú cưng của bạn đang có triệu chứng gì?..."
          value={form.symptoms}
          onChange={(e) => update('symptoms', e.target.value)}
          className="w-full border border-vc rounded-vc px-4 py-3 h-28 resize-none"
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={submit}
        disabled={loading}
        className="w-full bg-vc-primary text-white py-4 rounded-vc font-semibold"
      >
        {loading ? 'Đang gửi...' : 'Gửi yêu cầu đặt lịch →'}
      </button>
    </div>
  );
}