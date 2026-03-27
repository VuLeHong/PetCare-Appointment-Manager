import { Product } from '@/types';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/shop/${product.id}`)}
      className="bg-white border border-vc rounded-vc overflow-hidden cursor-pointer"
    >
      <div className="h-40 bg-vc-primary-pale flex items-center justify-center">
        🐾
      </div>

      <div className="p-4">
        <div className="text-sm text-vc-muted mb-1">
          {product.category === 'food' ? 'Thức ăn' : 'Phụ kiện'}
        </div>

        <h3 className="font-semibold mb-2">{product.name}</h3>

        <div className="text-vc-primary font-bold">
          {product.price.toLocaleString()}đ
        </div>
      </div>
    </div>
  );
}