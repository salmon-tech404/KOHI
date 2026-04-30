import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/30 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className='flex items-center justify-between max-w-6xl px-6 mx-auto'>
        <Link to='/' className='nav-logo'>
          Kohi
        </Link>

        <div className='flex items-center gap-8'>
          <Link to='/' className='nav-link'>
            Trang chủ
          </Link>
          <Link to='/menu' className='nav-link'>
            Menu
          </Link>
        </div>

        <button className='relative p-2 cursor-pointer'>
          <svg
            width='22'
            height='22'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth={1.5}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
