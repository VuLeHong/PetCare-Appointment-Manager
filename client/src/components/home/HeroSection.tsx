'use client';

import Link from "next/link";

export default function HeroSection() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 8 && hour < 20;

  const features = [
    {
      icon: '🏥',
      title: 'Cơ sở vật chất hiện đại',
      desc: 'Máy móc nhập khẩu',
    },
    {
      icon: '👨‍⚕️',
      title: 'Bác sĩ chuyên nghiệp',
      desc: '10+ năm kinh nghiệm',
    },
    {
      icon: '💊',
      title: 'Thuốc chất lượng',
      desc: 'Đảm bảo nguồn gốc',
    },
    {
      icon: '❤️',
      title: 'Chăm sóc tận tình',
      desc: '24/7 hỗ trợ',
    },
  ];

  return (
    <section className="bg-linear-to-br from-(--vc-primary) to-(--vc-primary-light) text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          {/* STATUS */}
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpen ? 'bg-success' : 'bg-danger'
              }`}
            />
            {isOpen ? 'Đang mở cửa' : 'Đã đóng cửa'} •{' '}
            {now.toLocaleTimeString('vi-VN', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.15] mb-6">
            Chăm sóc thú cưng
            <br />
            <span className="text-vc-primary-pale">
              tận tâm & chuyên nghiệp
            </span>
          </h1>

          {/* DESC */}
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
            Đội ngũ bác sĩ thú y giàu kinh nghiệm, trang thiết bị hiện đại.
            Sức khỏe của thú cưng là ưu tiên hàng đầu của chúng tôi.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <Link key='/shop' href='/shop'>
              <button className="bg-vc-accent px-6 py-3 rounded-vc font-semibold">
                📅 Đặt lịch khám
              </button>
            </Link>
            
            <Link key='/contact' href='/contact'>
                <button className="border border-vc text-white px-6 py-3 rounded-vc hover:bg-white/10 transition">
                  🛒 Xem cửa hàng
                </button>
            </Link>
            
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-vc rounded-vc p-5"
            >
              <div className="text-xl mb-3">{f.icon}</div>

              <div className="font-semibold text-sm mb-1">
                {f.title}
              </div>

              <div className="text-white/80 text-xs">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}