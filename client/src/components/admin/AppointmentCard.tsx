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
      className="p-4 border-b border-vc cursor-pointer hover:bg-vc-primary-pale transition"
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-vc-main">
          {data.owner_name}
        </p>

        <span
          className={`text-xs px-2 py-1 rounded-vc ${
            isPending
              ? 'bg-warning text-white'
              : 'bg-success text-white'
          }`}
        >
          {isPending ? 'Chờ xử lý' : 'Đã xác nhận'}
        </span>
      </div>

      <p className="text-sm text-vc-muted mt-1">
        {data.phone}
      </p>

      <p className="text-sm text-vc-muted">
        {data.pet_type === 'dog' ? 'Chó' : 'Mèo'}
      </p>
    </div>
  );
}