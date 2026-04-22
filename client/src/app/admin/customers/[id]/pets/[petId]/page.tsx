'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { petService } from '@/services/petService';
import { medicalRecordService } from '@/services/medicalRecordService';

import { Pet, MedicalRecord } from '@/types';

import Breadcrumb from '@/components/ui/Breadcrumb';
import PetInfo from '@/components/admin/PetInfo';
import MedicalRecordList from '@/components/admin/MedicalRecordList';
import AddRecordModal from '@/components/admin/AddRecordModal';
import EditRecordModal from '@/components/admin/EditRecordModal';

export default function PetDetailPage() {
  const { id, petId } = useParams<{ id: string; petId: string }>();

  const [pet, setPet] = useState<Pet | null>(null);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [editingRecord, setEditingRecord] = useState<MedicalRecord | null>(null);

  const pid = Number(petId);

  // =========================
  // LOAD DATA
  // =========================
  const loadData = async () => {
    const petData = await petService.getById(pid);
    setPet(petData);

    const recordList = await medicalRecordService.getByPet(pid);
    setRecords(recordList);
  };

useEffect(() => {
  if (!petId) return;

  const fetchData = async () => {
    const petData = await petService.getById(pid);
    setPet(petData);

    const recordList = await medicalRecordService.getByPet(pid);
    setRecords(recordList);
  };

  fetchData();
}, [petId]);

  // =========================
  // DELETE RECORD
  // =========================
  const handleDelete = async (recordId: number) => {
    await medicalRecordService.delete(recordId);
    setRecords(prev => prev.filter(r => r.id !== recordId));
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

      {/* MAIN */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="bg-white border border-vc rounded-2xl p-6">
          <PetInfo pet={pet} />
        </div>

        {/* RIGHT */}
        <div className="col-span-2 bg-white border border-vc rounded-2xl overflow-hidden">
          <MedicalRecordList
            records={records}
            onAdd={() => setShowAddRecord(true)}
            onDelete={handleDelete}
            onEdit={(r) => setEditingRecord(r)}
          />
        </div>

      </div>

      {/* MODAL đặt ngoài grid */}
      {showAddRecord && (
        <AddRecordModal
          petId={pet.id}
          onClose={() => setShowAddRecord(false)}
          onSuccess={loadData} // reload lại records
        />
      )}

      {editingRecord && (
        <EditRecordModal
          record={editingRecord}
          onClose={() => setEditingRecord(null)}
          onSuccess={loadData} 
        />
      )}
    </div>
  );
}