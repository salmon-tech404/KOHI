import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layouts/Navbar";
import { getOrderById, cancelOrder } from "../api/orders";
import { getOrderIds } from "../utils/orderStorage";
import useOrderNotifStore from "../store/orderNotifStore";

const STATUS_LABELS = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  ready: "Sẵn sàng lấy",
  done: "Hoàn thành",
  cancelled: "Đã hủy",
};

const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-blue-100 text-blue-700",
  ready: "bg-orange-100 text-orange-700",
  done: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-500",
};

function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className='w-full max-w-sm bg-white p-8 shadow-xl'
      >
        <h3 className='font-serif text-xl text-coffee-950 mb-2'>Hủy đơn hàng?</h3>
        <p className='text-sm text-coffee-700/60 mb-8'>
          Đơn hàng sẽ bị hủy và không thể khôi phục lại.
        </p>
        <div className='flex gap-3'>
          <button
            onClick={onConfirm}
            className='flex-1 py-2 bg-red-500 text-white text-sm hover:bg-red-600 transition-colors'
          >
            Xác nhận hủy
          </button>
          <button
            onClick={onCancel}
            className='flex-1 py-2 border border-coffee-200 text-coffee-700 text-sm hover:border-coffee-500 transition-colors'
          >
            Giữ lại
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function OrderInfo() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("active");
  const [cancelTarget, setCancelTarget] = useState(null);
  const clearNotif = useOrderNotifStore((state) => state.clear);

  useEffect(() => {
    clearNotif();
  }, [clearNotif]);

  useEffect(() => {
    const ids = getOrderIds();
    if (ids.length === 0) {
      setLoading(false);
      return;
    }
    Promise.all(ids.map((id) => getOrderById(id).then((r) => r.data).catch(() => null)))
      .then((results) => setOrders(results.filter(Boolean)))
      .finally(() => setLoading(false));
  }, []);

  const handleCancel = async () => {
    try {
      await cancelOrder(cancelTarget);
      setOrders((prev) =>
        prev.map((o) => (o._id === cancelTarget ? { ...o, status: "cancelled" } : o))
      );
    } catch (error) {
      alert(error.response?.data?.message || "Không thể hủy đơn.");
    } finally {
      setCancelTarget(null);
    }
  };

  const activeOrders = orders.filter((o) => o.status !== "cancelled");
  const cancelledOrders = orders.filter((o) => o.status === "cancelled");
  const displayed = activeTab === "active" ? activeOrders : cancelledOrders;

  return (
    <>
      <Navbar variant='light' />
      <main className='min-h-screen bg-cream pt-28 md:pt-40 pb-24 px-6'>
        <div className='max-w-2xl mx-auto'>
          <p className='section-label text-center'>Theo dõi</p>
          <h1 className='section-title text-center mb-10'>Đơn hàng của bạn</h1>

          {/* Tabs */}
          <div className='flex border-b border-coffee-200 mb-8'>
            <button
              onClick={() => setActiveTab("active")}
              className={`px-6 py-3 text-sm tracking-widest uppercase transition-colors ${
                activeTab === "active"
                  ? "border-b-2 border-coffee-800 text-coffee-950 font-semibold"
                  : "text-coffee-400 hover:text-coffee-700"
              }`}
            >
              Đã đặt ({activeOrders.length})
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              className={`px-6 py-3 text-sm tracking-widest uppercase transition-colors ${
                activeTab === "cancelled"
                  ? "border-b-2 border-coffee-800 text-coffee-950 font-semibold"
                  : "text-coffee-400 hover:text-coffee-700"
              }`}
            >
              Đã hủy ({cancelledOrders.length})
            </button>
          </div>

          {/* Content */}
          {loading && <p className='text-center text-coffee-400'>Đang tải...</p>}

          {!loading && displayed.length === 0 && (
            <p className='text-center text-coffee-400 py-16'>Không có đơn hàng nào.</p>
          )}

          <div className='space-y-4'>
            {displayed.map((order) => (
              <div key={order._id} className='bg-white p-6 shadow-sm'>
                <div className='flex items-start justify-between gap-4 mb-4'>
                  <div>
                    <p className='font-semibold text-coffee-950'>{order.customerName}</p>
                    <p className='text-sm text-stone-400'>{order.phone} · {order.pickupTime}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full font-medium shrink-0 ${STATUS_COLORS[order.status]}`}>
                    {STATUS_LABELS[order.status]}
                  </span>
                </div>

                <ul className='space-y-1 mb-4'>
                  {order.items.map((item, i) => (
                    <li key={i} className='flex justify-between text-sm text-stone-600'>
                      <span>{item.name} × {item.qty}</span>
                      <span className='text-stone-400'>{(item.price * item.qty).toLocaleString("vi-VN")}đ</span>
                    </li>
                  ))}
                </ul>

                <div className='flex items-center justify-between pt-4 border-t border-stone-100'>
                  <span className='font-semibold text-coffee-800'>
                    {order.total.toLocaleString("vi-VN")}đ
                  </span>
                  {order.status === "pending" && (
                    <button
                      onClick={() => setCancelTarget(order._id)}
                      className='text-sm text-red-400 underline underline-offset-2 hover:text-red-600 cursor-pointer'
                    >
                      Hủy đơn
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {cancelTarget && (
          <ConfirmDialog
            onConfirm={handleCancel}
            onCancel={() => setCancelTarget(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
