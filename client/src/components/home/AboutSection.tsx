export default function AboutSection() {
  return (
    <section className="py-20 bg-vc-warm">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <p className="text-vc-accent font-semibold mb-2">VỀ CHÚNG TÔI</p>
          <h2 className="text-3xl font-bold mb-4">
            Phòng khám VetCare
          </h2>

          <p className="text-vc-sub mb-6">
            Hoạt động từ 2015, xử lý các ca khám, tiêm, điều trị cho chó mèo.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-vc border border-vc">
              <div className="text-xl font-bold text-vc-primary">500+</div>
              <div className="text-sm text-vc-muted">Khách hàng</div>
            </div>
            <div className="bg-white p-4 rounded-vc border border-vc">
              <div className="text-xl font-bold text-vc-primary">1200+</div>
              <div className="text-sm text-vc-muted">Lượt khám</div>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-vc-primary h-32 rounded-vc"></div>
          <div className="bg-vc-primary-light h-32 rounded-vc"></div>
          <div className="bg-vc-primary-light h-32 rounded-vc"></div>
          <div className="bg-vc-primary h-32 rounded-vc"></div>
        </div>
      </div>
    </section>
  );
}