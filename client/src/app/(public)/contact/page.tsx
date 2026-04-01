import AppointmentForm from '@/components/contact/AppointmentForm';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-vc-main mb-3 flex items-center gap-3">
          📅 Đặt lịch khám
        </h1>

        <p className="text-vc-sub">
          Điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận sớm nhất
        </p>
      </div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* FORM */}
        <div className="bg-white border border-vc rounded-2xl p-8">
          <AppointmentForm />
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-5">

          {/* ADDRESS */}
          <div className="bg-white border border-vc rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 bg-vc-primary-pale rounded-lg flex items-center justify-center">
              📍
            </div>
            <div>
              <div className="font-semibold text-vc-main mb-1">
                Địa chỉ
              </div>
              <div className="text-vc-sub text-sm">
                123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="bg-white border border-vc rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 bg-vc-primary-pale rounded-lg flex items-center justify-center">
              📞
            </div>
            <div>
              <div className="font-semibold text-vc-main mb-1">
                Điện thoại
              </div>
              <div className="text-vc-sub text-sm">
                0901 234 567 · 0912 345 678
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="bg-white border border-vc rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 bg-vc-primary-pale rounded-lg flex items-center justify-center">
              ✉️
            </div>
            <div>
              <div className="font-semibold text-vc-main mb-1">
                Email
              </div>
              <div className="text-vc-sub text-sm">
                vetcare@email.com
              </div>
            </div>
          </div>

          {/* WORKING HOURS */}
          <div className="bg-vc-primary text-white rounded-2xl p-6">
            <div className="font-semibold mb-4 flex items-center gap-2">
              ⏱️ Giờ làm việc
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Thứ 2 – Thứ 6</span>
                <span>8:00 – 20:00</span>
              </div>

              <div className="flex justify-between">
                <span>Thứ 7</span>
                <span>8:00 – 18:00</span>
              </div>

              <div className="flex justify-between">
                <span>Chủ nhật</span>
                <span>9:00 – 17:00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}