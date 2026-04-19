'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { customerService } from '@/services/customerService';
import { petService } from '@/services/petService';

import { Customer, Pet } from '@/types';

import Breadcrumb from '@/components/ui/Breadcrumb';
import CustomerInfo from '@/components/admin/CustomerInfo';
import PetList from '@/components/admin/PetList';
import AddPetModal from '@/components/admin/AddPetModal';

export default function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [pets, setPets] = useState<Pet[]>([]);
  const [showAddPet, setShowAddPet] = useState(false);

  const customerId = Number(id);

  // =========================
  // LOAD DATA
  // =========================
  const loadPets = async () => {
    const petList = await petService.getByCustomer(customerId);
    setPets(petList);
  };

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      const customers = await customerService.getAll();
      const found = customers.find(c => c.id === customerId);
      setCustomer(found || null);

      await loadPets();
    };

    loadData();
  }, [id]);

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

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="bg-white border border-vc rounded-2xl p-6">
          <CustomerInfo customer={customer} />
        </div>

        {/* RIGHT */}
        <div className="col-span-2 bg-white border border-vc rounded-2xl overflow-hidden">
          <PetList
            pets={pets}
            customerId={customer.id}
            onAdd={() => setShowAddPet(true)}
          />
        </div>
      </div>

      {/* MODAL */}
      {showAddPet && (
        <AddPetModal
          onClose={() => setShowAddPet(false)}
          onSuccess={loadPets}
        />
      )}
    </div>
  );
}