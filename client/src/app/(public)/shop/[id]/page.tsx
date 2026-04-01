'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { productService } from '@/services/productService';
import { Product } from '@/types';

import ProductDetailView from '@/components/shop/ProductDetailView';

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    productService
      .getById(id)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        Đang tải...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        Không tìm thấy sản phẩm
      </div>
    );
  }

  return <ProductDetailView product={product} />;
}