'use client';

import { Customer } from "@/types";

export default function CustomerInfo({ customer }: { customer: Customer }) {
  return (
    <div className="text-center">

      {/* Avatar */}
      <div className="text-6xl mb-4">👩</div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-vc-main mb-4">
        {customer.name}
      </h2>

      <div className="space-y-4 text-sm">

        <div className="flex justify-between border-b border-vc pb-2">
          <span className="text-vc-muted">📞 Điện thoại</span>
          <span className="font-medium">{customer.phone}</span>
        </div>

        <div className="flex justify-between border-b border-vc pb-2">
          <span className="text-vc-muted">🐾 Số thú cưng</span>
          <span className="font-medium">{customer.pet_count ?? 0}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-vc-muted">📅 Ngày tạo</span>
          <span className="font-medium">
            {customer.created_at?.slice(0, 10)}
          </span>
        </div>

      </div>
    </div>
  );
}