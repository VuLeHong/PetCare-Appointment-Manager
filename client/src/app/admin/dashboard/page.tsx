'use client';

import { useEffect, useState } from 'react';

import { appointmentService } from '@/services/appointmentService';
import { medicalRecordService } from '@/services/medicalRecordService';
import { customerService } from '@/services/customerService';
import { productService } from '@/services/productService';
import { petService } from '@/services/petService';

import StatsCard from '@/components/admin/StatsCard';
import MedicalRecordRow from '@/components/admin/MedicalRecordRow';
import AppointmentCard from '@/components/admin/AppointmentCard';
import Modal from '@/components/ui/Modal';

import {
  AppointmentRequest,
  MedicalRecord,
  Customer,
  Product,
  Pet,
} from '@/types';


export default function DashboardPage() {
  const [appointments, setAppointments] = useState<AppointmentRequest[]>([]);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);

  const [selected, setSelected] = useState<AppointmentRequest | null>(null);
const fetchData = async () => {
  const [apts, custs, prods] = await Promise.all([
    appointmentService.getAll(),
    customerService.getAll(),
    productService.getAll(),
  ]);

  const pet = await petService.getById(1);
  const rec = await medicalRecordService.getByPet(1);

  setAppointments(apts);
  setCustomers(custs);
  setProducts(prods);
  setPets([pet]);
  setRecords(rec);
};

useEffect(() => {
  (async () => {
    await fetchData();
  })();
}, []);

  // =========================
  // ACTIONS
  // =========================
  const handleAccept = async (id: number) => {
    await appointmentService.updateStatus(id, 'accepted');

    setAppointments(prev =>
      prev.map(a =>
        a.id === id ? { ...a, status: 'accepted' } : a
      )
    );

    setSelected(null);
  };

  // =========================
  // STATS
  // =========================
  const stats = [
    {
      label: 'Khách hàng',
      value: customers.length,
      icon: '👥',
    },
    {
      label: 'Lượt khám',
      value: records.length,
      icon: '🩺',
    },
    {
      label: 'Sản phẩm',
      value: products.length,
      icon: '🛍️',
    },
    {
      label: 'Thú cưng',
      value: pets.length,
      icon: '🐾',
    },
  ];

  // =========================
  // RENDER
  // =========================
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-vc-main">
        📋 Bệnh án & Lịch hẹn
      </h1>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <StatsCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* ===== MEDICAL RECORD ===== */}
        <div className="bg-white border border-vc rounded-vc">
          <div className="p-4 border-b border-vc font-semibold">
            Lịch sử khám
          </div>

          {records.length === 0 ? (
            <p className="p-4 text-vc-muted text-sm">
              Chưa có dữ liệu
            </p>
          ) : (
            records.map(r => (
              <MedicalRecordRow key={r.id} record={r} />
            ))
          )}
        </div>

        {/* ===== APPOINTMENT ===== */}
        <div className="bg-white border border-vc rounded-vc">
          <div className="p-4 border-b border-vc font-semibold">
            Yêu cầu đặt lịch
          </div>

          {appointments.map(a => (
            <AppointmentCard
              key={a.id}
              data={a}
              onClick={() => setSelected(a)}
            />
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {selected && (
  <Modal
    title="Chi tiết yêu cầu đặt lịch"
    onClose={() => setSelected(null)}
  >
    <div className="space-y-4">

      {/* Tên */}
      <div className="bg-vc-soft rounded-xl p-4">
        <p className="text-sm text-vc-muted mb-1">👤 Tên khách hàng</p>
        <p className="font-semibold text-vc-main">
          {selected.owner_name}
        </p>
      </div>

      {/* SĐT */}
      <div className="bg-vc-soft rounded-xl p-4">
        <p className="text-sm text-vc-muted mb-1">📞 Điện thoại</p>
        <p className="font-semibold text-vc-main">
          {selected.phone}
        </p>
      </div>

      {/* Loại thú */}
      <div className="bg-vc-soft rounded-xl p-4">
        <p className="text-sm text-vc-muted mb-1">🐾 Loại thú cưng</p>
        <p className="font-semibold text-vc-main">
          {selected.pet_type === 'dog' ? 'Chó' : 'Mèo'}
        </p>
      </div>

      {/* Ngày */}
      <div className="bg-vc-soft rounded-xl p-4">
        <p className="text-sm text-vc-muted mb-1">📅 Ngày gửi</p>
        <p className="font-semibold text-vc-main">
          {selected.created_at?.slice(0, 10)}
        </p>
      </div>

      {/* Triệu chứng */}
      <div className="bg-vc-soft rounded-xl p-4">
        <p className="text-sm text-vc-muted mb-1">🩺 Triệu chứng</p>
        <p className="text-vc-main">
          {selected.symptoms}
        </p>
      </div>

      {/* Action */}
      <div className="flex items-center gap-3 pt-2">
        {selected.status === 'pending' && (
          <button
            onClick={() => handleAccept(selected.id)}
            className="flex-1 bg-vc-primary text-white py-3 rounded-xl font-semibold"
          >
            ✔ Xác nhận lịch
          </button>
        )}

        <button
          onClick={() => setSelected(null)}
          className="flex-1 text-vc-primary font-medium"
        >
          Đóng
        </button>
      </div>

    </div>
  </Modal>
)}
    </div>
  );
}