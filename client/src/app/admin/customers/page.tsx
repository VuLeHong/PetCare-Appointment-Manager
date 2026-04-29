'use client';

import { useEffect, useState } from 'react';
import { customerService } from '@/services/customerService';
import { Customer } from '@/types';

import CustomerRow from '@/components/admin/CustomerRow';
import Modal from '@/components/ui/Modal';

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
  });

  const loadCustomers = async () => {
    const data = await customerService.getAll();
    setCustomers(data);
  };

  useEffect(() => {
    (async () => {
      await loadCustomers();
    })();
  }, []);

  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

const handleCreate = async () => {
  try {
    const newCustomer = await customerService.create({
      name: form.name,
      phone: form.phone,
    });

    // update UI with real data from backend
    setCustomers(prev => [newCustomer, ...prev]);

    setShowModal(false);
    setForm({ name: '', phone: '' });
  } catch (error) {
    console.error('Create customer error:', error);
  }
};

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-vc-main">
            👥 Khách hàng
          </h1>
          <p className="text-sm text-vc-muted">
            Quản lý danh sách khách hàng
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-vc-primary text-white px-4 py-2 rounded-vc"
        >
          + Thêm khách hàng
        </button>
      </div>

      {/* SEARCH */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Tìm theo tên hoặc số điện thoại..."
        className="w-full border border-vc rounded-vc px-4 py-2"
      />

      {/* LIST */}
      <div className="bg-white border border-vc rounded-vc overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-5 px-4 py-3 text-sm text-vc-sub font-semibold border-b border-vc">
        <div></div>
        <div>Khách hàng</div>
        <div>Điện thoại</div>
        <div>Số thú cưng</div>
        <div>Ngày tạo</div>
      </div>

      {/* Rows */}
      {filtered.map(c => (
        <CustomerRow key={c.id} customer={c} />
      ))}
    </div>

      {/* MODAL */}
      {showModal && (
        <Modal title="Thêm khách hàng" onClose={() => setShowModal(false)}>
          <div className="space-y-3">
            <input
              placeholder="Tên"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <input
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <button
              onClick={handleCreate}
              className="w-full bg-vc-primary text-white py-2 rounded-vc"
            >
              Tạo khách hàng
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}