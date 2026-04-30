import { motion } from "framer-motion";
import { BEAN_LIST } from "../../constants/menu";
import MotionCard from "../ui/MotionCard";

export default function BeanSection() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-5xl px-6 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <p className='section-label'>Nguyên liệu</p>
          <h2 className='section-title'>Hạt cà phê của chúng tôi</h2>
        </motion.div>

        <div className='grid gap-10 md:grid-cols-2'>
          {BEAN_LIST.map((bean, i) => (
            <MotionCard key={bean.id} delay={i * 0.15} className='group'>
              {/* Image box — fixed height, object-cover, neutral bg */}
              <div className='flex items-center justify-center mb-4 h-92'>
                <img
                  src={bean.image}
                  alt={bean.name}
                  className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              {/* latin */}
              <p className='mb-1 text-xs italic text-stone-400'>{bean.latin}</p>
              {/* name & ratio (tỷ lệ) */}
              <div className='flex items-baseline justify-between mb-4'>
                <h3 className='font-serif text-5xl text-stone-900'>
                  {bean.name}
                </h3>
                <div className='text-right'>
                  <p className='font-serif text-4xl text-gold/60'>
                    {bean.ratio}
                  </p>
                  <p className='text-xs text-stone-400'>trong blend</p>
                </div>
              </div>
              {/* Line ngăn cách */}
              <div className='w-8 h-px mb-5 bg-gold' />
              {/* flavor : hương vị */}
              <div className='flex flex-wrap gap-2 mb-5'>
                {bean.flavor.map((f) => (
                  <span
                    key={f}
                    className='px-3 py-1 text-xs tracking-widest uppercase border border-stone-200 text-stone-500'
                  >
                    {f}
                  </span>
                ))}
              </div>
              {/*description: mô tả */}
              <p className='text-sm leading-relaxed text-stone-500'>
                {bean.desc}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
