'use client';

import { useEffect, useState } from 'react';
import { productService } from '@/services/productService';
import { Product } from '@/types';

import Modal from '@/components/ui/Modal';
import ProductRow from '@/components/admin/ProdcutRow';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    category: 'food',
    brand: '',
    price: '',
    unit: '',
    description: '',
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await productService.getAll();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // CREATE / UPDATE
  const handleSubmit = async () => {
    if (selected) {
      const updated = await productService.update(selected.id, {
        ...form,
        price: Number(form.price),
        category: form.category as 'food' | 'accessory',
      });

      setProducts(prev =>
        prev.map(p => (p.id === selected.id ? updated : p))
      );
    } else {
      const newProduct = await productService.create({
        ...form,
        price: Number(form.price),
        category: form.category as 'food' | 'accessory',
        image_url: '',
      });

      setProducts(prev => [newProduct, ...prev]);
    }

    resetForm();
  };

  // DELETE
  const handleDelete = async () => {
    if (!selected) return;

    await productService.delete(selected.id);

    setProducts(prev => prev.filter(p => p.id !== selected.id));
    resetForm();
  };

  const resetForm = () => {
    setSelected(null);
    setShowModal(false);
    setForm({
      name: '',
      category: 'food',
      brand: '',
      price: '',
      unit: '',
      description: '',
    });
  };

  const openEdit = (p: Product) => {
    setSelected(p);
    setForm({
      name: p.name,
      category: p.category,
      brand: p.brand,
      price: String(p.price),
      unit: p.unit,
      description: p.description,
    });
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛍️ Sản phẩm</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-vc-primary text-white px-4 py-2 rounded-vc"
        >
          + Thêm sản phẩm
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Tìm sản phẩm..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full border border-vc px-4 py-2 rounded-vc"
      />

      {/* LIST */}
      <div className="bg-white border border-vc rounded-vc">
        {filtered.map(p => (
          <ProductRow key={p.id} product={p} onClick={() => openEdit(p)} />
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <Modal
          title={selected ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm'}
          onClose={resetForm}
        >
          <div className="space-y-3">
            <input
              placeholder="Tên"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <input
              placeholder="Brand"
              value={form.brand}
              onChange={e => setForm({ ...form, brand: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <input
              placeholder="Giá"
              type="number"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <input
              placeholder="Đơn vị"
              value={form.unit}
              onChange={e => setForm({ ...form, unit: e.target.value })}
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <textarea
              placeholder="Mô tả"
              value={form.description}
              onChange={e =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border border-vc px-3 py-2 rounded-vc"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-vc-primary text-white py-2 rounded-vc"
            >
              {selected ? 'Cập nhật' : 'Tạo'}
            </button>

            {selected && (
              <button
                onClick={handleDelete}
                className="w-full bg-danger text-white py-2 rounded-vc"
              >
                Xoá sản phẩm
              </button>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}