'use client';

import { Pet } from "@/types";
interface RowProps {
  label: string;
  value: string;
}

export default function PetInfo({ pet }: { pet: Pet }) {
  return (
    <div className="text-center">

      <div className="text-6xl mb-4">
        {pet.species === 'dog' ? '🐶' : '🐱'}
      </div>

      <h2 className="text-xl font-semibold text-vc-main mb-2">
        {pet.name}
      </h2>

      <div className="inline-block bg-vc-primary-pale text-vc-primary text-xs px-3 py-1 rounded-full mb-4">
        {pet.species === 'dog' ? '🐶 Chó' : '🐱 Mèo'}
      </div>

      <div className="space-y-3 text-sm">

        <Row label="Màu lông" value={pet.color} />
        <Row label="Tuổi" value={`${pet.age} tuổi`} />
        <Row label="Cân nặng" value={`${pet.weight} kg`} />
        <Row label="Giới tính" value={pet.gender} />
        <Row label="Đặc điểm" value={pet.notes || '—'} />

      </div>
    </div>
  );
}

function Row({ label, value }: RowProps) {
  return (
    <div className="flex justify-between border-b border-vc pb-2">
      <span className="text-vc-muted">{label}</span>
      <span className="font-medium text-vc-main">{value}</span>
    </div>
  );
}