type Category = 'all' | 'food' | 'accessory';

export default function CategoryFilter({
  value,
  onChange,
}: {
  value: Category;
  onChange: (v: Category) => void;
}) {
  const list: { key: Category; label: string }[] = [
    { key: 'all', label: 'Tất cả' },
    { key: 'food', label: 'Thức ăn' },
    { key: 'accessory', label: 'Phụ kiện' },
  ];

  return (
    <div className="flex gap-3 mb-10">
      {list.map((c) => (
        <button
          key={c.key}
          onClick={() => onChange(c.key)}
          className={`px-4 py-2 rounded-vc border text-sm
            ${
              value === c.key
                ? 'bg-vc-primary text-white'
                : 'bg-white text-vc-sub border-vc'
            }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}