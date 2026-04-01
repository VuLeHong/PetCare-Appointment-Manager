'use client';

import { useEffect, useState } from 'react';
import { productService } from '@/services/productService';
import { Product } from '@/types';

import ProductCard from '@/components/shop/ProductCard';
import CategoryFilter from '@/components/shop/CategoryFilter';

type Category = 'all' | 'food' | 'accessory';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getAll()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    category === 'all'
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2">Cửa hàng</h1>
      <p className="text-vc-sub mb-8">
        Danh sách sản phẩm cho thú cưng
      </p>

      {/* FILTER */}
      <CategoryFilter value={category} onChange={setCategory} />

      {/* LOADING */}
      {loading && (
        <div className="text-vc-muted">Đang tải...</div>
      )}

      {/* EMPTY */}
      {!loading && filtered.length === 0 && (
        <div className="text-vc-muted">
          Không có sản phẩm
        </div>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}