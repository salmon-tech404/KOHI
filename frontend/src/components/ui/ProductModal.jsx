import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useCartStore from "../../store/cartStore";

export default function ProductModal({ product, onClose }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    // Backdrop — click ngoài để đóng
    <motion.div
      className='fixed inset-0 z-50 flex items-end justify-center px-4 pb-0 bg-black/60 sm:items-center sm:pb-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Panel */}
      <motion.div
        className='relative w-full overflow-hidden bg-white sm:max-w-lg'
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className='absolute z-10 flex items-center justify-center w-8 h-8 text-white transition-colors bg-black/40 top-3 right-3 hover:bg-black/70'
          aria-label='Đóng'
        >
          ✕
        </button>

        {/* Ảnh sản phẩm */}
        <div className='overflow-hidden aspect-video bg-stone-100'>
          <img
            src={product.image}
            alt={product.name}
            className='object-cover w-full h-full'
          />
        </div>

        {/* Nội dung */}
        <div className='p-8'>
          <p className='mb-2 card-label'>{product.category?.name}</p>
          <h2 className='mb-3 font-serif text-3xl text-coffee-950'>
            {product.name}
          </h2>
          <p className='mb-8 text-sm leading-relaxed text-coffee-700/70'>
            {product.description}
          </p>

          <div className='flex items-center justify-between'>
            <span className='font-serif text-2xl text-gold'>
              {product.price.toLocaleString("vi-VN")}đ
            </span>
            <button
              onClick={handleAdd}
              className={`px-8 btn-primary transition-all ${added ? "opacity-70" : ""}`}
            >
              {added ? "Đã thêm ✓" : "Thêm vào giỏ"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

ProductModal.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.shape({ name: PropTypes.string }),
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
