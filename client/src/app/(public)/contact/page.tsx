import AppointmentForm from '@/components/contact/AppointmentForm';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      
      {/* FORM */}
      <div className="bg-white border border-vc rounded-vc p-6">
        <h1 className="text-2xl font-bold mb-6">
          Đặt lịch khám
        </h1>

        <AppointmentForm />
      </div>

      {/* INFO */}
      <div className="flex flex-col gap-4">
        
        <div className="bg-vc-warm p-5 rounded-vc">
          <h3 className="font-semibold mb-2">Địa chỉ</h3>
          <p className="text-vc-sub">
            123 Nguyễn Huệ, TP.HCM
          </p>
        </div>

        <div className="bg-vc-warm p-5 rounded-vc">
          <h3 className="font-semibold mb-2">Điện thoại</h3>
          <p className="text-vc-sub">
            0901 234 567 · 0912 345 678
          </p>
        </div>

        <div className="bg-vc-warm p-5 rounded-vc">
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-vc-sub">
            vetcare@email.com
          </p>
        </div>

        <div className="bg-vc-primary text-white p-5 rounded-vc">
          <h3 className="font-semibold mb-2">Giờ làm việc</h3>
          <p>Thứ 2 – Chủ nhật</p>
          <p className="font-bold">8:00 – 20:00</p>
        </div>
      </div>
    </div>
  );
}