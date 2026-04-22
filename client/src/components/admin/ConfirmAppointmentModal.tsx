'use client';

import Modal from '@/components/ui/Modal';
import { AppointmentRequest } from '@/types';

interface Props {
  data: AppointmentRequest;
  onClose: () => void;
  onConfirm: (id: number) => void;
}

export default function ConfirmAppointmentModal({
  data,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal title="Chi tiết yêu cầu đặt lịch" onClose={onClose}>
      <div className="space-y-4">

        {/* Tên */}
        <Block label="👤 Tên khách hàng" value={data.owner_name} />

        {/* SĐT */}
        <Block label="📞 Điện thoại" value={data.phone} />

        {/* Loại thú */}
        <Block
          label="🐾 Loại thú cưng"
          value={data.pet_type === 'dog' ? 'Chó' : 'Mèo'}
        />

        {/* Ngày */}
        <Block
          label="📅 Ngày gửi"
          value={data.created_at?.slice(0, 10) || ''}
        />

        {/* Triệu chứng */}
        <div className="bg-vc-soft rounded-xl p-4">
          <p className="text-sm text-vc-muted mb-1">🩺 Triệu chứng</p>
          <p className="text-vc-main">{data.symptoms}</p>
        </div>

        {/* Action */}
        {data.status === 'pending' && (
          <button
            onClick={() => onConfirm(data.id)}
            className="w-full bg-vc-primary text-white py-3 rounded-xl font-semibold"
          >
            ✔ Xác nhận lịch
          </button>
        )}

      </div>
    </Modal>
  );
}

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-vc-soft rounded-xl p-4">
      <p className="text-sm text-vc-muted mb-1">{label}</p>
      <p className="font-semibold text-vc-main">{value}</p>
    </div>
  );
}