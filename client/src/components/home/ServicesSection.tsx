'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Khám tổng quát',
      desc: 'Kiểm tra sức khỏe định kỳ, phát hiện sớm bệnh lý.',
      icon: '🩺',
      bg: 'bg-vc-primary-pale',
      color: 'text-vc-primary',
    },
    {
      title: 'Tiêm vaccine',
      desc: 'Phòng ngừa các bệnh nguy hiểm cho chó mèo.',
      icon: '💉',
      bg: 'bg-orange-100',
      color: 'text-vc-accent',
    },
    {
      title: 'Grooming & Spa',
      desc: 'Tắm, cắt tỉa lông, vệ sinh tai răng cho thú cưng.',
      icon: '✂️',
      bg: 'bg-purple-100',
      color: 'text-purple-500',
    },
    {
      title: 'Điều trị nội trú',
      desc: 'Theo dõi và điều trị tích cực các ca bệnh nặng.',
      icon: '🏥',
      bg: 'bg-cyan-100',
      color: 'text-cyan-600',
    },
  ];

  return (
    <section className="py-20 bg-vc-soft">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-vc-primary font-semibold tracking-wider">
            DỊCH VỤ
          </p>
          <h2 className="text-3xl font-bold text-vc-main">
            Chúng tôi cung cấp
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-vc rounded-2xl p-7 shadow-sm hover:shadow-md transition"
            >
              {/* ICON BOX */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.bg}`}
              >
                <span className={`text-xl ${s.color}`}>
                  {s.icon}
                </span>
              </div>

              {/* TEXT */}
              <h3 className="font-semibold text-vc-main mb-2">
                {s.title}
              </h3>

              <p className="text-vc-muted text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}