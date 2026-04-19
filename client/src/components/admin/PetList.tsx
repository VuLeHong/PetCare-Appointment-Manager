'use client';

import { Customer, Pet } from "@/types";
import { useRouter } from 'next/navigation';

interface Props {
  pets: Pet[];
  customerId: number; // Thêm prop customer
  onAdd: () => void; // thêm prop
}
export default function PetList({ pets, customerId,  onAdd }: Props) {
const router = useRouter();
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-vc">
        <p className="font-semibold text-vc-main">🐾 Thú cưng</p>

        <button
          onClick={onAdd}
          className="bg-vc-primary text-white px-4 py-2 rounded-xl text-sm font-medium"
        >
          + Thêm thú cưng
        </button>
      </div>

      {/* List */}
      {pets.map(pet => (
        <div
          key={pet.id}
          className="flex items-center gap-4 px-5 py-4 border-b border-vc hover:bg-vc-primary-pale cursor-pointer"
          onClick={() =>
            router.push(`/admin/customers/${customerId}/pets/${pet.id}`)
          }
        >
          {/* Avatar */}
          <div className="text-3xl">
            {pet.species === 'dog' ? '🐶' : '🐱'}
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="font-semibold text-vc-main">
              {pet.name}
            </p>

            <p className="text-sm text-vc-muted mt-1">
              {pet.species === 'dog' ? '🐶 Chó' : '🐱 Mèo'} · {pet.color} · {pet.age} tuổi · {pet.weight}kg
            </p>
          </div>

          {/* Arrow */}
          <span className="text-vc-muted">→</span>
        </div>
      ))}
    </>
  );
}