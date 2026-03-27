'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { customerService } from '@/services/customerService';
import { petService } from '@/services/petService';

import { Customer, Pet } from '@/types';

import Breadcrumb from '@/components/ui/Breadcrumb';
import Modal from '@/components/ui/Modal';
import PetRow from '@/components/admin/petRow';

export default function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [pets, setPets] = useState<Pet[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    species: 'dog',
    color: '',
    age: '',
    weight: '',
  });

  // =========================
  // LOAD DATA
  // =========================
  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      const customerId = Number(id);

      // lấy customer
      const customers = await customerService.getAll();
      const found = customers.find(c => c.id === customerId);
      setCustomer(found || null);

      // lấy pets đúng service
      const petList = await petService.getByCustomer(customerId);
      setPets(petList);
    };

    loadData();
  }, [id]);

  // =========================
  // CREATE PET
  // =========================
  const handleCreatePet = async () => {
    const customerId = Number(id);

    const newPet = await petService.create(customerId, {
      name: form.name,
      species: form.species as 'dog' | 'cat',
      color: form.color,
      age: Number(form.age),
      weight: Number(form.weight),
      gender: form.species as 'male' | 'female',
      notes: '',
      image_url: '',
    });

    setPets(prev => [...prev, newPet]);

    setShowModal(false);
    setForm({
      name: '',
      species: 'dog',
      color: '',
      age: '',
      weight: '',
    });
  };

  if (!customer) return null;

  return (
    <div className="space-y-6">
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: 'Khách hàng', href: '/admin/customers' },
          { label: customer.name },
        ]}
      />

      {/* CUSTOMER INFO */}
      <div className="bg-white border border-vc rounded-vc p-6">
        <h2 className="text-xl font-bold text-vc-main">
          {customer.name}
        </h2>
        <p className="text-vc-muted mt-1">
          {customer.phone}
        </p>
      </div>

      {/* PET LIST */}
      <div className="bg-white border border-vc rounded-vc">
        <div className="flex justify-between items-center p-4 border-b border-vc">
          <h3 className="font-semibold text-vc-main">
            🐾 Thú cưng
          </h3>

          <button
            onClick={() => setShowModal(true)}
            className="bg-vc-primary text-white px-3 py-1 rounded-vc text-sm"
          >
            + Thêm thú cưng
          </button>
        </div>

        {pets.length === 0 ? (
          <p className="p-4 text-sm text-vc-muted">
            Chưa có thú cưng
          </p>
        ) : (
          pets.map(p => (
            <PetRow key={p.id} pet={p} />
          ))
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <Modal
          title="Thêm thú cưng"
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-3">
            <input
              placeholder="Tên"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <select
              value={form.species}
              onChange={e =>
                setForm({ ...form, species: e.target.value })
              }
              className="w-full border border-vc px-3 py-2 rounded-vc"
            >
              <option value="dog">Chó</option>
              <option value="cat">Mèo</option>
            </select>

            <input
              placeholder="Màu lông"
              value={form.color}
              onChange={e => setForm({ ...form, color: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <div className="flex gap-2">
              <input
                placeholder="Tuổi"
                type="number"
                value={form.age}
                onChange={e => setForm({ ...form, age: e.target.value })}
                className="w-full border border-vc px-3 py-2 rounded-vc"
              />

              <input
                placeholder="Kg"
                type="number"
                value={form.weight}
                onChange={e => setForm({ ...form, weight: e.target.value })}
                className="w-full border border-vc px-3 py-2 rounded-vc"
              />
            </div>

            <button
              onClick={handleCreatePet}
              className="w-full bg-vc-primary text-white py-2 rounded-vc"
            >
              Tạo thú cưng
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}