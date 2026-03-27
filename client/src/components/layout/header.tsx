'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'Trang chủ' },
  { href: '/shop', label: 'Cửa hàng' },
  { href: '/contact', label: 'Liên hệ' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-vc sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-bold text-vc-primary">
          VetCare
        </Link>

        {/* NAV */}
        <nav className="flex gap-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-4 py-2 rounded-vc text-sm
                ${
                  pathname === n.href
                    ? 'bg-vc-primary-pale text-vc-primary'
                    : 'text-vc-sub'
                }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* ADMIN */}
        <Link
          href="/login"
          className="bg-vc-accent text-white px-4 py-2 rounded-vc text-sm"
        >
          Admin
        </Link>
      </div>
    </header>
  );
}