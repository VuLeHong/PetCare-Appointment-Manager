'use client';

import { Customer } from '@/types';
import { useRouter } from 'next/navigation';

interface Props {
  customer: Customer;
}

export default function CustomerRow({ customer }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/admin/customers/${customer.id}`)}
      className="flex items-center gap-4 p-4 border-b border-vc cursor-pointer hover:bg-vc-primary-pale"
    >
      {/* Avatar */}
      <div className="w-10 h-10 rounded-vc bg-vc-primary-pale flex items-center justify-center">
        👤
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-semibold text-vc-main">
          {customer.name}
        </p>

        <p className="text-sm text-vc-muted">
          {customer.phone}
        </p>
      </div>

      {/* Pet count */}
      <div className="text-sm text-vc-muted">
        {customer.pet_count ?? 0} thú cưng
      </div>

      {/* Arrow */}
      <div className="text-vc-muted">→</div>
    </div>
  );
}