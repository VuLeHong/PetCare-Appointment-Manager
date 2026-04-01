'use client';

export default function AboutSection() {
  const stats = [
    { value: '500+', label: 'Khách hàng tin tưởng' },
    { value: '1200+', label: 'Lượt khám mỗi năm' },
    { value: '10+', label: 'Năm kinh nghiệm' },
    { value: '5⭐', label: 'Đánh giá trung bình' },
  ];

  const features = [
    { icon: '🏥', label: 'Cơ sở khang trang' },
    { icon: '🔬', label: 'Phòng xét nghiệm' },
    { icon: '🐕', label: 'Khu điều trị chó' },
    { icon: '🐱', label: 'Khu chăm sóc mèo' },
  ];

  return (
    <section className="py-20 bg-vc-warm">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-vc-accent font-semibold tracking-wider mb-3">
            VỀ CHÚNG TÔI
          </p>

          <h2 className="text-4xl font-bold text-vc-main mb-6 leading-tight">
            Phòng khám VetCare — Nơi
            <br />
            thú cưng được yêu thương
          </h2>

          <p className="text-vc-main leading-relaxed mb-10">
            Thành lập năm 2015, VetCare là một trong những phòng khám thú y uy tín tại TP.HCM.
            Chúng tôi có đội ngũ bác sĩ nhiều năm kinh nghiệm, thiết bị đầy đủ và quy trình rõ ràng cho từng ca điều trị.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-vc rounded-vc p-5"
              >
                <div className="text-2xl font-bold text-vc-primary">
                  {s.value}
                </div>
                <div className="text-sm text-vc-sub mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-vc-primary text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="text-sm font-semibold">
                {f.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}