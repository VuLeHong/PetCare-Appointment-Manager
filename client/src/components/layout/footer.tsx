export default function Footer() {
  return (
    <footer className="bg-vc-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold mb-2">VetCare</h3>
          <p className="text-sm text-white/80">
            Phòng khám thú y tại TP.HCM
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Liên hệ</h4>
          <p className="text-sm">0901 234 567</p>
          <p className="text-sm">vetcare@email.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Giờ làm việc</h4>
          <p className="text-sm">8:00 - 20:00</p>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-white/20">
        © VetCare
      </div>
    </footer>
  );
}