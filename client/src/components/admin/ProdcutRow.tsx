'use client';

import { Product } from '@/types';

interface Props {
  product: Product;
  onClick: () => void;
}

export default function ProductRow({ product, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 p-4 border-b border-vc cursor-pointer hover:bg-vc-primary-pale"
    >
      <div className="w-12 h-12 bg-vc-primary-pale rounded-vc flex items-center justify-center">
        🛍️
      </div>

      <div className="flex-1">
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm text-vc-muted">
          {product.brand} · {product.unit}
        </p>
      </div>

      <div className="text-vc-primary font-semibold">
        {product.price.toLocaleString()}đ
      </div>
    </div>
  );
}