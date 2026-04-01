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
      <div className="text-sm text-vc-muted mb-8">
        <span
          className="cursor-pointer hover:text-vc-primary"
          onClick={() => router.push('/')}
        >
          Trang chủ
        </span>
        {' / '}
        <span
          className="cursor-pointer hover:text-vc-primary"
          onClick={() => router.push('/shop')}
        >
          Cửa hàng
        </span>
        {' / '}
        <span className="text-vc-main font-medium">
          {product.name}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* IMAGE */}
        <div className="bg-vc-primary-pale rounded-2xl h-[420px] flex items-center justify-center text-7xl">
          🥩
        </div>

        {/* INFO */}
        <div>

          {/* CATEGORY */}
          <span className="inline-block bg-vc-primary-pale text-vc-primary text-xs px-3 py-1 rounded-full mb-4">
            {product.category === 'food' ? 'Thức ăn' : 'Phụ kiện'}
          </span>

          {/* NAME */}
          <h1 className="text-4xl font-bold text-vc-main mb-3">
            {product.name}
          </h1>

          {/* BRAND */}
          <div className="text-vc-sub mb-5">
            Thương hiệu: <span className="font-bold">{product.brand}</span> · 
            {' '}Đơn vị: {product.unit}
          </div>

          {/* PRICE */}
          <div className="text-3xl font-bold text-vc-primary mb-6">
            {product.price.toLocaleString('vi-VN')}đ
          </div>

          {/* DESCRIPTION BOX */}
          <div className="bg-vc-warm rounded-xl p-5 text-vc-sub leading-relaxed mb-6">
            {product.description}
          </div>

          {/* CTA */}
          <button className="w-full bg-vc-primary text-white py-4 rounded-xl font-semibold mb-4 hover:opacity-90 transition">
            📞 0901 234 567 — Liên hệ mua
          </button>

          {/* NOTE */}
          <div className="bg-vc-primary-pale text-vc-sub text-sm rounded-xl p-4">
            💡 Sản phẩm chỉ bán trực tiếp tại phòng khám hoặc qua điện thoại
          </div>

        </div>
      </div>
    </div>
  );
}