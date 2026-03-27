'use client';

import { Product } from '@/types';
import { useRouter } from 'next/navigation';

export default function ProductDetailView({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* BREADCRUMB */}
      <div className="text-sm text-vc-muted mb-6">
        <span
          className="cursor-pointer"
          onClick={() => router.push('/')}
        >
          Trang chủ
        </span>
        {' / '}
        <span
          className="cursor-pointer"
          onClick={() => router.push('/shop')}
        >
          Cửa hàng
        </span>
        {' / '}
        <span className="text-vc-main font-medium">
          {product.name}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* IMAGE */}
        <div className="bg-vc-primary-pale rounded-vc h-80 flex items-center justify-center">
          <span className="text-6xl">🐾</span>
        </div>

        {/* INFO */}
        <div>
          <div className="text-sm text-vc-muted mb-2">
            {product.category === 'food' ? 'Thức ăn' : 'Phụ kiện'}
          </div>

          <h1 className="text-3xl font-bold mb-3">
            {product.name}
          </h1>

          <div className="text-vc-sub mb-4">
            {product.brand} · {product.unit}
          </div>

          <div className="text-2xl font-bold text-vc-primary mb-6">
            {product.price.toLocaleString()}đ
          </div>

          {/* BUTTON */}
          <button className="bg-vc-primary text-white px-6 py-3 rounded-vc mb-4">
            Liên hệ mua
          </button>

          {/* DESCRIPTION */}
          <div className="bg-vc-warm p-4 rounded-vc text-vc-sub">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
}