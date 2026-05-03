import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../../store/cartStore";

export default function ProductCard({ product, onSelect }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className='cursor-pointer group' onClick={onSelect}>
      <div className='relative mb-4 overflow-hidden aspect-3/4 bg-coffee-200/20'>
        <img
          src={product.image}
          alt={product.name}
          className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
          className='absolute px-6 py-2 text-xs tracking-widest uppercase transition-transform duration-300 -translate-x-1/2 translate-y-12 bg-white cursor-pointer bottom-4 left-1/2 group-hover:translate-y-0 text-coffee-700 hover:bg-gold hover:text-white whitespace-nowrap'
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

      <p className='mb-1 card-label'>{product.category?.name}</p>
      <h3 className='mb-1 card-title'>{product.name}</h3>
      <p className='card-price'>{product.price.toLocaleString("vi-VN")}đ</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.shape({ name: PropTypes.string }),
  }).isRequired,
  onSelect: PropTypes.func,
};
