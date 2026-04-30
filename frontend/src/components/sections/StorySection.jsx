import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";

export default function StorySection() {
  return (
    <section className='relative px-6 py-32 overflow-hidden text-center text-white'>
      <div
        className='absolute inset-0 bg-center bg-cover'
        style={{ backgroundImage: `url('${IMAGES.storyBg}')` }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 ' />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='relative z-10 max-w-2xl mx-auto'
      >
        <p className='section-label'>Câu chuyện của chúng tôi</p>

        <h2 className='mb-8 leading-tight section-title-light'>
          Mỗi tách cà phê <br />
          <em>là một khoảnh khắc</em>
        </h2>

        <p className='mb-10 text-lg leading-relaxed text-white/90'>
          KOHI được hình thành từ tình yêu dành cho văn hóa cà phê Nhật Bản, nơi
          đề cao sự tối giản, tinh tế và sự chăm chút đến từng chi tiết. Triết
          lý này được chúng tôi thể hiện trong từng ly cà phê thủ công, với sự
          tập trung vào chất lượng, độ chính xác và trải nghiệm thưởng thức trọn
          vẹn mỗi ngày.
        </p>

        <Link to='/menu' className='inline-block btn-outline-gold'>
          Xem toàn bộ menu
        </Link>
      </motion.div>
    </section>
  );
}
