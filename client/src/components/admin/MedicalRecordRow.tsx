'use client';

import { MedicalRecord } from '@/types';

interface Props {
  record: MedicalRecord;
}

export default function MedicalRecordCard({ record }: Props) {
  return (
    <div className="flex items-center gap-4 bg-white border border-vc rounded-2xl p-4 hover:shadow-sm transition">

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

      {/* ACTIONS */}
      <div className="flex items-center gap-2">

        {/* EDIT */}
        <button className="w-9 h-9 rounded-lg bg-vc-primary-pale flex items-center justify-center hover:opacity-80">
          ✏️
        </button>

        {/* DELETE */}
        <button className="w-9 h-9 rounded-lg bg-danger flex items-center justify-center text-white hover:opacity-80">
          🗑️
        </button>
      </div>
    </div>
  );
}