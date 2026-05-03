import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export default function Blog() {
  return (
    <>
      <Navbar variant='light' />
      <main className='flex items-center justify-center min-h-screen px-6 bg-cream'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-md text-center'
        >
          <p className='mb-6 font-serif text-6xl'>✍️</p>
          <p className='section-label'>Blog</p>
          <h1 className='mb-6 section-title'>Sắp ra mắt</h1>
          <p className='mb-10 leading-relaxed text-coffee-700/60'>
            Blog dự kiến sẽ ra mắt sớm. Hãy quay lại sau để đọc những câu
            chuyện về cà phê, văn hóa và con người.
          </p>
          <Link to='/' className='inline-block btn-outline-dark'>
            Về trang chủ
          </Link>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
