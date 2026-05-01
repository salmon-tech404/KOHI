import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../../store/cartStore";
import CartDrawer from "../ui/CartDrawer";

export default function Navbar({ variant = "default" }) {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const isLight = variant === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = isLight
    ? "bg-white py-4"
    : scrolled
      ? "bg-white/30 backdrop-blur-md py-4"
      : "bg-transparent py-5";

  const logoClass = isLight ? "nav-logo-dark" : "nav-logo";
  const linkClass = isLight ? "nav-link-dark" : "nav-link";
  const iconStroke = isLight ? "#1a0e0d" : "white";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}
      >
        <div className='flex items-center justify-between max-w-6xl px-6 mx-auto'>
          {/* Logo */}
          <Link to='/' className={logoClass}>
            Kohi
          </Link>

          {/* Desktop links — ẩn trên mobile */}
          <div className='items-center hidden gap-8 md:flex'>
            <Link to='/' className={linkClass}>
              Trang chủ
            </Link>
            <Link to='/menu' className={linkClass}>
              Menu
            </Link>
          </div>

          {/* Right side: cart + hamburger */}
          <div className='flex items-center gap-3'>
            {/* Cart icon */}
            <button
              onClick={() => setCartOpen(true)}
              className='relative p-2 cursor-pointer'
            >
              <svg
                width='22'
                height='22'
                fill='none'
                viewBox='0 0 24 24'
                stroke={iconStroke}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              {totalItems > 0 && (
                <span className='absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold bg-gold text-white rounded-full flex items-center justify-center'>
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger — chỉ hiện trên mobile */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className='flex flex-col justify-center gap-1.5 p-2 md:hidden cursor-pointer'
              aria-label='Toggle menu'
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className={`block w-5 h-0.5 transition-colors ${isLight ? "bg-coffee-950" : "bg-white"}`}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className={`block w-5 h-0.5 ${isLight ? "bg-coffee-950" : "bg-white"}`}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className={`block w-5 h-0.5 ${isLight ? "bg-coffee-950" : "bg-white"}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className='overflow-hidden bg-white border-t border-coffee-100 md:hidden'
            >
              <div className='flex flex-col gap-4 px-6 py-4'>
                <Link
                  to='/'
                  onClick={() => setMenuOpen(false)}
                  className='text-sm tracking-widest uppercase text-coffee-700 hover:text-coffee-950'
                >
                  Trang chủ
                </Link>
                <Link
                  to='/menu'
                  onClick={() => setMenuOpen(false)}
                  className='text-sm tracking-widest uppercase text-coffee-700 hover:text-coffee-950'
                >
                  Menu
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

Navbar.propTypes = {
  variant: PropTypes.string,
};
