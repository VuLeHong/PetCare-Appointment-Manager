'use client';

export default function HeroSection() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 8 && hour < 20;

  return (
    <section className="bg-linear-to-br from-(--vc-primary) to-(--vc-primary-light) text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          {/* STATUS */}
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm mb-6">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpen ? 'bg-green-400' : 'bg-red-400'
              }`}
            />
            {isOpen ? 'Đang mở cửa' : 'Đã đóng cửa'}
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Chăm sóc thú cưng
            <br />
            <span className="text-(--vc-primary-pale)">
              tận tâm & chuyên nghiệp
            </span>
          </h1>

          {/* DESC */}
          <p className="text-white/80 mb-8">
            Khám, điều trị và chăm sóc thú cưng với quy trình rõ ràng và thiết bị đầy đủ.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="bg-vc-accent px-6 py-3 rounded-vc font-semibold">
              Đặt lịch khám
            </button>
            <button className="border border-white/40 px-6 py-3 rounded-vc">
              Xem cửa hàng
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-4">
          {[
            'Khám tổng quát',
            'Tiêm vaccine',
            'Grooming',
            'Điều trị',
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur p-4 rounded-vc"
            >
              <div className="font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}