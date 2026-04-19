'use client';

import { AppointmentRequest } from '@/types';

interface Props {
  data: AppointmentRequest;
  onClick: () => void;
}

export default function AppointmentCard({ data, onClick }: Props) {
  const isPending = data.status === 'pending';

  return (
    <div
      onClick={onClick}
      className="px-4 py-3 border-b border-vc cursor-pointer hover:bg-vc-primary-pale transition"
    >
      {/* Row 1 */}
      <div className="flex justify-between items-center">
        <p className="font-semibold text-vc-main">
          {data.owner_name}
        </p>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            isPending
              ? 'bg-yellow-100 text-warning'
              : 'bg-green-100 text-success'
          }`}
        >
          {isPending ? 'Chờ xử lý' : 'Đã xác nhận'}
        </span>
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-2 text-sm text-vc-sub mt-1">
        <span>📞 {data.phone}</span>
        <span>·</span>
        <span>
          {data.pet_type === 'dog' ? '🐶 Chó' : '🐱 Mèo'}
        </span>
      </div>

      {/* Row 3 */}
      <p className="text-xs text-vc-muted mt-1">
        {data.created_at?.slice(0, 10)}
      </p>
    </div>
  );
}