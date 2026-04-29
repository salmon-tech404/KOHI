import { motion } from "framer-motion";
import { MENU_ITEMS } from "../../constants/menu";

export default function WhyUs() {
  return (
    <section className='px-6 py-24 bg-coffee-900'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-white/10'>
          {MENU_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className='px-10 py-12 group'
            >
              <span className='block mb-6 font-serif transition-colors duration-300 text-7xl text-gold/20 group-hover:text-gold/50'>
                0{i + 1}
              </span>
              <h3 className='mb-3 font-serif text-xl text-white'>
                {item.title}
              </h3>
              <p className='text-sm leading-relaxed text-white/40'>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
