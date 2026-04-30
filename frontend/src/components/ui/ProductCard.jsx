import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className='cursor-pointer group'>
      <div className='relative overflow-hidden aspect-3/4 mb-4 bg-coffee-200/20'>
        <img
          src={product.image}
          alt={product.name}
          className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
        />
        <button
          onClick={handleAdd}
          className='absolute px-6 py-2 text-xs tracking-widest uppercase transition-transform duration-300 -translate-x-1/2 translate-y-12 bg-white bottom-4 left-1/2 group-hover:translate-y-0 text-coffee-700 hover:bg-gold hover:text-white whitespace-nowrap'
        >
          <AnimatePresence mode='wait'>
            {added ? (
              <motion.span
                key='added'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Đã thêm ✓
              </motion.span>
            ) : (
              <motion.span
                key='add'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Thêm vào giỏ
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <p className='mb-1 card-label'>{product.category}</p>
      <h3 className='mb-1 card-title'>{product.name}</h3>
      <p className='card-price'>{product.price.toLocaleString("vi-VN")}đ</p>
    </div>
  );
}
