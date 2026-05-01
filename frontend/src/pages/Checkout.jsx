import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import Navbar from "../components/layouts/Navbar";
import { createOrder } from "../api/orders";

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();

  //thiết lập form
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickupTime: "",
    note: "",
  });

  //Hàm xử lý thay đổi
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Xử lý submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [h, m] = form.pickupTime.split(":").map(Number);
    const minutes = h * 60 + m;
    if (minutes < 600 || minutes > 1200) {
      alert("Vui lòng chọn giờ từ 10:00 đến 20:00");
      return;
    }
    try {
      await createOrder({
        customerName: form.name,
        phone: form.phone,
        pickupTime: form.pickupTime,
        note: form.note,
        items: items.map((i) => ({
          product: i._id,
          name: i.name,
          price: i.price,
          qty: i.qty,
        })),
        total: getTotalPrice(),
      });
      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error("Đặt hàng thất bại:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <>
      <Navbar variant='light' />
      <main className='min-h-screen px-6 pb-24 pt-28 md:pt-40 bg-cream'>
        <div className='max-w-2xl mx-auto '>
          {/* Title */}
          <p className='text-center section-label'>Đặt hàng</p>
          <h1 className='mb-12 text-center section-title'>
            Thông tin nhận hàng
          </h1>
          {/* Form đặt hàng */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Họ và tên */}
            <div className=''>
              <label className='block mb-1 text-sm font-bold tracking-widest uppercase text-coffee-700'>
                Họ và Tên
              </label>
              <input
                type='text'
                name='name'
                placeholder='Nguyễn Văn A'
                required
                value={form.name}
                onChange={handleChange}
                className='w-full px-2 py-2 text-base bg-white border border-coffee-200 focus:outline-none focus:border-gold'
              />
            </div>
            {/* Số điện thoại */}
            <div>
              <label className='block mb-2 text-sm font-bold tracking-widest uppercase text-coffee-700'>
                số điện thoại
              </label>
              <input
                type='text'
                name='phone'
                required
                placeholder='035xxxxxxx'
                className='w-full px-2 py-2 text-base bg-white border border-coffee-200 focus:outline-none focus:border-gold'
                onChange={handleChange}
              />
            </div>
            {/* Thông tin đặt hàng */}
            <div>
              <label className='block mb-2 text-xs tracking-widest uppercase text-coffee-700'>
                Giờ lấy hàng
              </label>
              <input
                type='time'
                name='pickupTime'
                required
                min='10:00'
                max='20:00'
                value={form.pickupTime}
                onChange={handleChange}
                className='w-full px-2 py-2 text-base bg-white border border-coffee-200 focus:outline-none focus:border-gold'
              />
              <p className='mt-1 text-xs text-red-500/70'>
                Chú ý: Thời gian nhận hàng chỉ từ 10:00 — 20:00
              </p>
            </div>
            {/* Ghi chú */}
            <div>
              <label className='block mb-2 text-sm font-bold tracking-widest uppercase text-coffee-700'>
                Ghi chú
              </label>
              <textarea
                type='text'
                name='note'
                rows={10}
                placeholder='Xin cho ít ngọt (20%), đá 30%...'
                className='w-full px-4 py-3 text-sm bg-white border resize-none border-coffee-200 focus:outline-none focus:border-gold'
                onChange={handleChange}
              />
            </div>

            {/* Tóm tắt order */}
            <div className='p-6 space-y-3 border border-coffee-200'>
              {items.map((item) => (
                <div key={item._id} className='flex justify-between text-sm'>
                  <span className='text-coffee-700'>
                    {item.name} × {item.qty}
                  </span>
                  <span className='text-gold'>
                    {(item.price * item.qty).toLocaleString("vi-VN")}đ
                  </span>
                </div>
              ))}
              <div className='flex justify-between pt-3 border-t border-coffee-200'>
                <span className='font-serif text-coffee-950'>Tổng cộng</span>
                <span className='font-serif text-xl text-gold'>
                  {getTotalPrice().toLocaleString("vi-VN")}đ
                </span>
              </div>
            </div>
            {/* Button xác nhận */}
            <button type='submit' className='w-full btn-primary'>
              Xác nhận đặt hàng
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
