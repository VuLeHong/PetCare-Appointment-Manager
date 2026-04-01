'use client';

import { useRouter, usePathname } from 'next/navigation';
import { authService } from '@/services/authService';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { label: 'Dashboard', href: '/admin/dashboard' },
    { label: 'Khách hàng', href: '/admin/customers' },
    { label: 'Sản phẩm', href: '/admin/products' },
  ];

  const logout = () => {
    authService.logout();
    router.push('/login');
  };

  return (
    <aside className="w-64 bg-white border-r border-vc flex flex-col">
      
      {/* LOGO */}
      <div className="h-16 flex items-center px-6 font-bold text-vc-primary border-b border-vc">
        VetCare Admin
      </div>

      {/* MENU */}
      <div className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <div
            key={item.href}
            onClick={() => router.push(item.href)}
            className={`px-4 py-2 rounded-vc cursor-pointer text-sm
              ${
                pathname === item.href
                  ? 'bg-vc-primary text-white'
                  : 'text-vc-sub hover:bg-vc-primary-pale'
              }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* LOGOUT */}
      <div className="p-4 border-t border-vc">
        <button
          onClick={logout}
          className="w-full bg-vc-accent text-white py-2 rounded-vc text-sm"
        >
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}