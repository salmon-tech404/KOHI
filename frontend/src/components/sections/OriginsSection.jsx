import { motion } from "framer-motion";
import { ORIGIN_LIST } from "../../constants/menu";

export default function OriginSection() {
  return (
    <section className='px-6 py-24 bg-cream'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <p className='section-label'>Nguồn gốc</p>
          <h2 className='section-title'>Vùng trồng cà phê</h2>
        </motion.div>

        <div className='grid gap-10 md:grid-cols-3'>
          {ORIGIN_LIST.map((origin, i) => (
            <motion.div
              key={origin.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className='relative overflow-hidden cursor-pointer group aspect-3/4'
            >
              {/* Ảnh */}
              <img
                src={origin.image}
                alt={origin.region}
                className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
              />

              {/* Overlay luôn hiện — gradient từ dưới lên */}
              <div className='absolute inset-0 bg-linear-to-t from-coffee-950/90 via-coffee-950/20 to-transparent' />

              {/* Info luôn hiện ở dưới */}
              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <p className='mb-1 text-xs tracking-widest uppercase text-gold'>
                  {origin.province}
                </p>
                <h3 className='mb-1 font-serif text-2xl text-white'>
                  {origin.region}
                </h3>
                <p className='mb-3 text-xs text-white/50'>
                  Độ cao: {origin.altitude}
                </p>

                {/* Desc — ẩn, hover mới hiện */}
                <p className='overflow-hidden text-sm leading-relaxed transition-all duration-500 text-white/70 max-h-0 group-hover:max-h-32'>
                  {origin.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
