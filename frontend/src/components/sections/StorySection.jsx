import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function StorySection() {
  return (
    <section className='px-6 py-32 text-center text-white bg-coffee-800'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='max-w-2xl mx-auto'
      >
        <p className='text-gold text-xs tracking-[0.4em] uppercase mb-6'>
          Câu chuyện của chúng tôi
        </p>

        <h2 className='mb-8 font-serif text-4xl leading-tight md:text-5xl'>
          Mỗi tách cà phê <br />
          <em>là một khoảnh khắc</em>
        </h2>

        <p className='mb-10 text-lg leading-relaxed text-white/50'>
          Kohi ra đời từ tình yêu với văn hóa cà phê Nhật Bản — sự tối giản,
          tinh tế và chú trọng từng chi tiết nhỏ. Chúng tôi mang triết lý đó vào
          từng ly cà phê được pha chế thủ công mỗi ngày.
        </p>

        <Link
          to='/menu'
          className='inline-block px-10 py-3 text-sm tracking-widest uppercase transition-colors duration-300 border border-gold text-gold hover:bg-gold hover:text-coffee-950'
        >
          Xem toàn bộ menu
        </Link>
      </motion.div>
    </section>
  );
}
