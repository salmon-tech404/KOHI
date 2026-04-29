import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import { MENU_PRODUCTS } from "../../constants/menu";

export default function MenuPreview() {
  return (
    <section id='featured' className='px-6 py-24 bg-cream'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <p className='text-gold text-xs tracking-[0.4em] uppercase mb-3'>
            Tinh tuyển
          </p>
          <h2 className='font-serif text-5xl text-coffee-700'>
            Thức uống nổi bật
          </h2>
        </motion.div>

        <div className='grid grid-cols-2 gap-6 mb-12 md:grid-cols-4'>
          {MENU_PRODUCTS.map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className='text-center'>
          <Link
            to='/menu'
            className='inline-block px-10 py-3 text-sm tracking-widest uppercase transition-colors duration-300 border border-coffee-700 text-coffee-700 hover:bg-coffee-700 hover:text-white'
          >
            Xem toàn bộ menu
          </Link>
        </div>
      </div>
    </section>
  );
}
