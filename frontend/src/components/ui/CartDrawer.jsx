import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import useCartStore from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQty, getTotalPrice } = useCartStore();
  const navigate = useNavigate();
  //Xử lý checkout đơn hàng
  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 z-40 bg-black/40'
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className='fixed top-0 right-0 z-50 flex flex-col w-full h-full max-w-md bg-white shadow-2xl'
          >
            {/* Header */}
            <div className='flex items-center justify-between px-6 py-5 border-b border-stone-100'>
              <h2 className='font-serif text-2xl text-coffee-950'>Giỏ hàng</h2>
              <button
                onClick={onClose}
                className='text-stone-400 hover:text-stone-600'
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className='flex-1 px-6 py-4 overflow-y-auto'>
              {items.length === 0 ? (
                <p className='mt-10 text-center text-stone-400'>
                  Giỏ hàng trống
                </p>
              ) : (
                <ul className='space-y-4'>
                  {items.map((item) => (
                    <li
                      key={item._id}
                      className='flex gap-4 py-4 border-b border-stone-100'
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className='object-cover w-16 h-16 rounded'
                      />
                      <div className='flex-1'>
                        <p className='font-serif text-coffee-900'>
                          {item.name}
                        </p>
                        <p className='text-sm text-gold'>
                          {item.price.toLocaleString("vi-VN")}đ
                        </p>
                        <div className='flex items-center gap-3 mt-2'>
                          <button
                            onClick={() =>
                              updateQty(item._id, Math.max(1, item.qty - 1))
                            }
                            className='w-6 h-6 border border-stone-300 text-stone-600 hover:bg-stone-100'
                          >
                            −
                          </button>
                          <span className='text-sm'>{item.qty}</span>
                          <button
                            onClick={() => updateQty(item._id, item.qty + 1)}
                            className='w-6 h-6 border border-stone-300 text-stone-600 hover:bg-stone-100'
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item._id)}
                        className='text-xs text-stone-300 hover:text-red-400'
                      >
                        Xoá
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className='px-6 py-5 border-t border-stone-100'>
                <div className='flex justify-between mb-4'>
                  <span className='text-stone-500'>Tổng cộng</span>
                  <span className='font-serif text-xl text-coffee-950'>
                    {getTotalPrice().toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className='w-full cursor-pointer btn-primary'
                >
                  Đặt hàng
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
