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
      className="grid grid-cols-5 items-center px-4 py-4 border-b  cursor-pointer hover:bg-vc-primary-pale transition"
    >
      {/* Avatar */}
      <div className="text-2xl">👤</div>

      {/* Name */}
      <div className="font-semibold text-vc-main">
        {customer.name}
      </div>

      {/* Phone */}
      <div className="text-vc-sub">
        {customer.phone}
      </div>

      {/* Pet count badge */}
      <div>
        <span className="px-3 py-1 text-xs rounded-full bg-vc-primary-pale text-vc-primary font-medium">
          {customer.pet_count ?? 0} thú cưng
        </span>
      </div>

      {/* Date + arrow */}
      <div className="flex items-center justify-between text-vc-muted">
        <span>{customer.created_at?.slice(0, 10)}</span>
        <span>→</span>
      </div>
    </div>
  );
}