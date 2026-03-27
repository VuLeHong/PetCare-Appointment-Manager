'use client';

import Link from 'next/link';

interface Item {
  label: string;
  href?: string;
}

interface Props {
  items: Item[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm text-vc-muted">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {/* separator */}
            {index !== 0 && <span>/</span>}

            {/* item */}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-vc-primary transition"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? 'text-vc-main font-semibold'
                    : ''
                }
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}