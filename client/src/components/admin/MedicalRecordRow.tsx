'use client';

import { MedicalRecord } from '@/types';

interface Props {
  record: MedicalRecord;
}

export default function MedicalRecordRow({ record }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-vc hover:bg-vc-primary-pale transition">
      
      {/* Avatar / icon */}
      <div className="w-10 h-10 rounded-vc bg-vc-primary-pale flex items-center justify-center text-lg shrink-0">
        🐾
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Title */}
        <div className="flex items-center gap-2">
          <p className="font-semibold text-vc-main">
            {record.symptoms}
          </p>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-3 text-sm text-vc-muted mt-1">
          <span>📅 {record.visit_date}</span>
          <span>⚖️ {record.weight} kg</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="px-2 py-1 text-xs rounded-vc bg-vc-primary-pale text-vc-primary hover:opacity-80">
          ✏️
        </button>

        <button className="px-2 py-1 text-xs rounded-vc bg-danger text-white hover:opacity-80">
          🗑️
        </button>
      </div>
    </div>
  );
}