export default function Footer() {
  return (
    <footer className="bg-vc-main text-white mt-20">
      
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-vc-primary rounded-lg flex items-center justify-center">
              🐾
            </div>

            <div className="font-bold text-lg">VetCare</div>
          </div>

          <p className="text-vc-sub text-sm leading-relaxed">
            Phòng khám thú y uy tín tại TP.HCM, chuyên chăm sóc sức khỏe chó mèo với đội ngũ bác sĩ giàu kinh nghiệm.
          </p>
        </div>

        {/* INFO */}
        <div>
          <h4 className="font-semibold mb-4">Thông tin</h4>

          <div className="space-y-3 text-sm text-vc-sub">
            <div>📍 123 Đường Nguyễn Huệ, Q.1, TP.HCM</div>
            <div>📞 0901 234 567</div>
            <div>📞 0912 345 678</div>
            <div>✉️ vetcare@email.com</div>
          </div>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="font-semibold mb-4">Giờ làm việc</h4>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-vc-sub">
              <span>Thứ 2 – Thứ 6</span>
              <span className="text-vc-primary-light">8:00 – 20:00</span>
            </div>

            <div className="flex justify-between text-vc-sub">
              <span>Thứ 7</span>
              <span className="text-vc-primary-light">8:00 – 18:00</span>
            </div>

            <div className="flex justify-between text-vc-sub">
              <span>Chủ nhật</span>
              <span className="text-vc-primary-light">9:00 – 17:00</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-vc text-center text-sm text-vc-sub py-5">
        © 2025 VetCare Phòng Khám Thú Y. All rights reserved.
      </div>
    </footer>
  );
}