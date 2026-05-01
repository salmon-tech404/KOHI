import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layouts/Navbar";

export default function OrderSuccess() {
  return (
    <>
      <Navbar />
      <main className='flex items-center justify-center min-h-screen px-6 bg-cream'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-md text-center'
        >
          <p className='mb-6 font-serif text-6xl'>☕</p>
          <p className='section-label'>Đặt hàng thành công</p>
          <h1 className='mb-6 section-title'>Cảm ơn bạn!</h1>
          <p className='mb-10 leading-relaxed text-coffee-700/60'>
            Chúng tôi sẽ gọi xác nhận đơn hàng trong thời gian sớm nhất. Hẹn gặp
            bạn tại Kohi!
          </p>
          <Link to='/' className='inline-block btn-outline-dark'>
            Về trang chủ
          </Link>
        </motion.div>
      </main>
    </>
  );
}
