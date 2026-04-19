'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { petService } from '@/services/petService';
import { medicalRecordService } from '@/services/medicalRecordService';

import { Pet, MedicalRecord } from '@/types';

import Breadcrumb from '@/components/ui/Breadcrumb';
import Modal from '@/components/ui/Modal';
import MedicalRecordRow from '@/components/admin/MedicalRecordRow';
import PetInfo from '@/components/admin/PetInfo';
import MedicalRecordList from '@/components/admin/MedicalRecordList';

export default function PetDetailPage() {
  const { id, petId } = useParams<{ id: string; petId: string }>();

  const [pet, setPet] = useState<Pet | null>(null);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    visit_date: '',
    weight: '',
    symptoms: '',
    notes: '',
  });

  // =========================
  // LOAD DATA
  // =========================
  const loadData = async () => {
    const pid = Number(petId);

    const petData = await petService.getById(pid);
    setPet(petData);

    const recordList = await medicalRecordService.getByPet(pid);
    setRecords(recordList);
  };

  useEffect(() => {
    if (petId) {
      (async () => {
        await loadData();
      })();
    }
  }, [petId]);

  // =========================
  // CREATE RECORD
  // =========================
  const handleCreate = async () => {
    const pid = Number(petId);

    const newRecord = await medicalRecordService.create(pid, {
      visit_date: form.visit_date,
      weight: Number(form.weight),
      symptoms: form.symptoms,
      notes: form.notes,
    });

    setRecords(prev => [newRecord, ...prev]);

    setShowModal(false);
    setForm({
      visit_date: '',
      weight: '',
      symptoms: '',
      notes: '',
    });
  };

  // =========================
  // DELETE RECORD
  // =========================
  const handleDelete = async (id: number) => {
    await medicalRecordService.delete(id);
    setRecords(prev => prev.filter(r => r.id !== id));
  };

  if (!pet) return null;

  return (
    <div className="space-y-6">
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: 'Khách hàng', href: '/admin/customers' },
          { label: 'Chi tiết KH', href: `/admin/customers/${id}` },
          { label: pet.name },
        ]}
      />

      <div className="grid grid-cols-3 gap-6">

      {/* LEFT */}
      <div className="bg-white border border-vc rounded-2xl p-6">
        <PetInfo pet={pet} />
      </div>

      {/* RIGHT */}
      <div className="col-span-2 bg-white border border-vc rounded-2xl overflow-hidden">
        <MedicalRecordList records={records} />
      </div>

    </div>

      {/* MODAL CREATE */}
      {showModal && (
        <Modal
          title="Tạo bệnh án"
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-3">
            <input
              type="date"
              value={form.visit_date}
              onChange={e =>
                setForm({ ...form, visit_date: e.target.value })
              }
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <input
              placeholder="Cân nặng (kg)"
              type="number"
              value={form.weight}
              onChange={e =>
                setForm({ ...form, weight: e.target.value })
              }
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <textarea
              placeholder="Triệu chứng"
              value={form.symptoms}
              onChange={e =>
                setForm({ ...form, symptoms: e.target.value })
              }
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <textarea
              placeholder="Ghi chú"
              value={form.notes}
              onChange={e =>
                setForm({ ...form, notes: e.target.value })
              }
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <button
              onClick={handleCreate}
              className="w-full bg-vc-primary text-white py-2 rounded-vc"
            >
              Lưu bệnh án
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}