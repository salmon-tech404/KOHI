export default function Footer() {
  return (
    <footer className='px-6 py-16 bg-coffee-950 text-white/50'>
      <div className='grid max-w-6xl gap-10 mx-auto mb-12 md:grid-cols-3'>
        <div>
          <h3 className='mb-4 font-serif text-2xl text-white'>Kohi</h3>
          <p className='text-sm leading-relaxed'>
            コーヒー — Cà phê theo phong cách Nhật Bản. Mỗi tách cà phê là một
            khoảnh khắc đáng sống chậm.
          </p>
        </div>

        <div>
          <h4 className='footer-heading'>
            Giờ mở cửa
          </h4>
          <div className='space-y-2 text-sm'>
            <p>Thứ 2 — Thứ 6: 7:00 — 21:00</p>
            <p>Thứ 7 — Chủ nhật: 8:00 — 22:00</p>
          </div>
        </div>

        <div>
          <h4 className='footer-heading'>
            Liên hệ
          </h4>
          <div className='space-y-2 text-sm'>
            <p>123 Đường Cà Phê, Quận 1</p>
            <p>TP. Hồ Chí Minh</p>
            <p>0909 123 456</p>
          </div>
        </div>
      </div>

      <div className='pt-6 text-xs text-center border-t border-white/10'>
        <p>© 2025 Kohi. Made with ♥ and coffee.</p>
      </div>
    </footer>
  );
}
