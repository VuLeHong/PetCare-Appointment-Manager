'use client';

import { Pet } from '@/types';
import { useRouter } from 'next/navigation';

export default function PetRow({ pet }: { pet: Pet }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/admin/customers/${pet.customer_id}/pets/${pet.id}`)}
      className="flex items-center gap-4 p-4 border-b border-vc cursor-pointer hover:bg-vc-primary-pale"
    >
      <div className="w-10 h-10 bg-vc-primary-pale rounded-vc flex items-center justify-center">
        🐾
      </div>

      <div className="flex-1">
        <p className="font-semibold">{pet.name}</p>
        <p className="text-sm text-vc-muted">
          {pet.species} · {pet.weight}kg
        </p>
      </div>

      <span className="text-vc-muted">→</span>
    </div>
  );
}