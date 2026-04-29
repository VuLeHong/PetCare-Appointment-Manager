'use client';

import { MedicalRecord } from "@/types";

interface Props {
  records: MedicalRecord[];
  onAdd: () => void;
  onDelete?: (id: number) => void;
  onEdit?: (record: MedicalRecord) => void;
}

export default function MedicalRecordList({ records, onAdd, onDelete, onEdit }: Props) {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-vc">
        <p className="font-semibold text-vc-main">📋 Lịch sử khám</p>

        <button
            onClick={onAdd}
            className="bg-vc-primary text-white px-4 py-2 rounded-xl text-sm font-medium"
        >
            + Thêm bệnh án
        </button>
      </div>

      {/* List */}
      {records.map(r => (
        <div key={r.id} className="p-5 border-b border-vc bg-vc-primary-pale/30">

          {/* Top */}
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-vc-main">
              📅 {r.visit_date.slice(0, 10)}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit?.(r)}
                className="text-sm text-vc-primary"
              >
                ✏️ Sửa
              </button>
              <button
                onClick={() => onDelete?.(r.id)}
                className="text-sm text-danger"
              >
                🗑️
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2 text-sm">

            <div>
              <p className="text-vc-muted">🩺 Triệu chứng</p>
              <p className="text-vc-main">{r.symptoms}</p>
            </div>

            {/* <div>
              <p className="text-vc-muted">💊 Điều trị</p>
              <p className="text-vc-main">{r.treatment}</p>
            </div> */}

            <div>
              <p className="text-vc-muted">📝 Ghi chú</p>
              <p className="text-vc-main">{r.notes || '—'}</p>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}