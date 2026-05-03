import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layouts/Navbar";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <main className='flex items-center justify-center min-h-screen px-6 bg-cream'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-md text-center'
        >
          <p className='mb-6 font-serif text-6xl'>☕</p>
          <p className='section-label'>Đặt hàng thành công</p>
          <h1 className='mb-4 section-title'>Cảm ơn bạn!</h1>
          <p className='mb-3 leading-relaxed text-coffee-700/60'>
            Chúng tôi sẽ gọi xác nhận đơn hàng trong thời gian sớm nhất.
          </p>
          <p className='mb-8 text-sm text-coffee-500'>
            Chuyển về trang chủ sau{" "}
            <span className='font-bold text-gold'>{countdown}s</span>
            {" "}— kiểm tra đơn hàng tại icon{" "}
            <Link to='/order-info' className='underline underline-offset-2 hover:text-coffee-800'>
              Đơn hàng
            </Link>{" "}
            trên thanh điều hướng.
          </p>
          <Link to='/' className='inline-block btn-outline-dark'>
            Về trang chủ ngay
          </Link>
        </motion.div>
      </main>
    </>
  );
}
