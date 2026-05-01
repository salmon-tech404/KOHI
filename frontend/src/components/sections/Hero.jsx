import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../layouts/PageHero";
import { IMAGES } from "../../constants/images";

export default function Hero() {
  return (
    <PageHero image={IMAGES.hero}>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-gold text-base tracking-[0.4em] uppercase mb-4'
        >
          Thưởng thức từng giọt cà phê
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-3 font-serif text-6xl font-bold leading-none md:text-8xl lg:text-9xl'
        >
          Kohi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-10 font-serif text-lg italic md:text-2xl text-white/50'
        >
          じゃ、コーヒーでも
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex justify-center gap-4'
        >
          <Link to='/menu' className='btn-primary'>
            Xem Menu
          </Link>
          <a href='#featured' className='btn-outline-light'>
            Khám phá
          </a>
        </motion.div>
      </div>
    </PageHero>
  );
}
