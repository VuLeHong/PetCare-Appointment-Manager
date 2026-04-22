'use client';

import { MedicalRecord } from '@/types';
import { useRouter } from 'next/navigation';
interface Props {
  record: MedicalRecord;
}

export default function MedicalRecordCard({ record }: Props) {
  const router = useRouter();
  return (
    <div 
      onClick={() => router.push(`/admin/customers/${record.customer_id}/pets/${record.pet_id}`)}
      className="flex items-center gap-4 bg-white border border-vc p-4 hover:shadow-sm transition cursor-pointer hover:bg-vc-primary-pale transition"
    >

      {/* ICON */}
      <div className="w-12 h-12 rounded-xl bg-vc-primary-pale flex items-center justify-center text-xl shrink-0">
        🐾
      </div>

      {/* CONTENT */}
      <div className="flex-1">

        {/* TITLE */}
        <div className="font-semibold text-vc-main">
          {record.symptoms}
        </div>

        {/* META */}
        <div className="flex items-center gap-4 text-sm text-vc-sub mt-1">
          <span>📅 {record.visit_date}</span>
          <span>⚖️ {record.weight} kg</span>
        </div>

        {/* NOTE (optional) */}
        {record.notes && (
          <div className="text-sm text-vc-muted mt-1 truncate">
            {record.notes}
          </div>
        )}
      </div>
    </div>
  );
}