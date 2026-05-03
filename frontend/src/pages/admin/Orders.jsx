import { useState, useEffect } from "react";
import { getOrders, updateOrderStatus } from "../../api/admin";

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

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      setOrders((prev) => prev.map((o) => (o._id === id ? { ...o, status } : o)));
    } catch (error) {
      alert(error.response?.data?.message || "Lỗi cập nhật trạng thái");
    }
  };

  if (loading) return <p className='text-stone-400'>Đang tải...</p>;

  return (
    <div className='mx-auto max-w-7xl'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='font-serif text-2xl text-coffee-950'>Đơn hàng</h2>
        <span className='text-sm text-stone-400'>{orders.length} đơn</span>
      </div>

      {orders.length === 0 && (
        <p className='text-stone-400'>Chưa có đơn hàng nào.</p>
      )}

      <div className='space-y-2'>
        {orders.map((order) => (
          <div
            key={order._id}
            className='flex items-center gap-4 px-5 py-4 bg-white rounded shadow-sm'
          >
            {/* Date */}
            <div className='w-32 shrink-0'>
              <p className='text-xs text-stone-400'>
                {formatDate(order.createdAt)}
              </p>
            </div>

            {/* Customer */}
            <div className='w-36 shrink-0'>
              <p className='text-sm font-semibold truncate text-coffee-950'>
                {order.customerName}
              </p>
              <p className='text-xs text-stone-400'>{order.phone}</p>
            </div>

            {/* Items */}
            <div className='flex-1 min-w-0 '>
              <p className='text-sm text-stone-600'>
                {order.items.map((i) => `${i.name} ×${i.qty}`).join(", ")}
              </p>
              {order.note && (
                <p className='text-xs italic truncate text-stone-400'>
                  &ldquo;{order.note}&rdquo;
                </p>
              )}
            </div>

            {/* Pickup time */}
            <div className='w-16 text-center shrink-0'>
              <p className='text-sm text-stone-500'>{order.pickupTime}</p>
            </div>

            {/* Total */}
            <div className='w-24 text-right shrink-0'>
              <p className='text-sm font-semibold text-coffee-800'>
                {order.total.toLocaleString("vi-VN")}đ
              </p>
            </div>

            {/* Status badge */}
            <div className='text-center w-28 shrink-0'>
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium ${STATUS_COLORS[order.status]}`}
              >
                {STATUS_LABELS[order.status]}
              </span>
            </div>

            {/* Status dropdown — ẩn nếu đã hủy */}
            <div className='w-36 shrink-0'>
              {order.status !== "cancelled" ? (
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className='w-full px-2 py-1 text-xs border rounded cursor-pointer border-stone-200 text-stone-600'
                >
                  {Object.entries(STATUS_LABELS)
                    .filter(([value]) => value !== "cancelled")
                    .map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                </select>
              ) : (
                <span className='text-xs text-stone-300'>—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
