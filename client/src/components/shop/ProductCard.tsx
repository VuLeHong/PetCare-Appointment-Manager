'use client';

import { Product } from '@/types';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/shop/${product.id}`)}
      className="bg-white border border-vc rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition"
    >
      {/* IMAGE */}
      <div className="h-44 bg-vc-primary-pale flex items-center justify-center text-5xl">
        🥩
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TOP ROW */}
        <div className="flex justify-between items-center mb-3">
          <span className="bg-vc-primary-pale text-vc-primary text-xs px-3 py-1 rounded-full font-medium">
            {product.category === 'food' ? 'Thức ăn' : 'Phụ kiện'}
          </span>

          <span className="text-vc-primary font-bold text-lg">
            {product.price.toLocaleString('vi-VN')}đ
          </span>
        </div>

        {/* NAME */}
        <h3 className="font-semibold text-vc-main mb-1">
          {product.name}
        </h3>

        {/* SUB INFO */}
        <p className="text-sm text-vc-muted">
          {product.brand} · {product.unit}
        </p>
      </div>
    </div>
  );
}