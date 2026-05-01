import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import CartDrawer from "../ui/CartDrawer";

export default function Navbar({ variant = "default" }) {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const isLight = variant === "light";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isLight
            ? "bg-white shadow-sm py-4"
            : scrolled
              ? "bg-white/30 backdrop-blur-md shadow-sm py-4"
              : "bg-transparent py-5"
        }`}
      >
        <div className='flex items-center justify-between max-w-6xl px-6 mx-auto'>
          <Link to='/' className={isLight ? "nav-logo-dark" : "nav-logo"}>
            Kohi
          </Link>

          <div className='flex items-center gap-8'>
            <Link to='/' className={isLight ? "nav-link-dark" : "nav-link"}>
              Trang chủ
            </Link>
            <Link to='/menu' className={isLight ? "nav-link-dark" : "nav-link"}>
              Menu
            </Link>
          </div>

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
              stroke={isLight ? "#1a0e0d" : "white"}
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
        </div>
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
