export default function ServicesSection() {
  const services = [
    'Khám tổng quát',
    'Tiêm vaccine',
    'Grooming',
    'Điều trị nội trú',
  ];

  return (
    <section className="py-20 bg-vc-soft">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <p className="text-vc-primary font-semibold">DỊCH VỤ</p>
          <h2 className="text-3xl font-bold">Các dịch vụ chính</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s}
              className="bg-white border border-vc rounded-vc p-6"
            >
              <h3 className="font-semibold mb-2">{s}</h3>
              <p className="text-vc-muted text-sm">
                Thực hiện theo quy trình tiêu chuẩn.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}