import express from "express";
import Order from "../models/Order.js";
import requireAuth from "../middleware/auth.js";

const router = express.Router();

// POST /api/orders — tạo đơn hàng mới
router.post("/", async (req, res) => {
  try {
    const { customerName, phone, pickupTime, note, items, total } = req.body;

    const order = new Order({
      customerName,
      phone,
      pickupTime,
      note,
      items,
      total,
    });

    const saved = await order.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: error.message });
  }
});

// GET /api/orders — lấy tất cả đơn hàng (dùng cho admin Phase 5)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH /api/orders/:id/status — cập nhật trạng thái (admin only)
router.patch("/:id/status", requireAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after" },
    );
    if (!order) return res.status(404).json({ message: "Không tìm thấy đơn" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Lỗi cập nhật trạng thái" });
  }
});

// PATCH /api/orders/:id/cancel — khách tự hủy (không cần JWT)
router.patch("/:id/cancel", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Không tìm thấy đơn" });
    if (order.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Không thể hủy đơn đã được xác nhận" });
    }
    order.status = "cancelled";
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Lỗi hủy đơn" });
  }
});

// GET /api/orders/:id — khách tra đơn của mình (public)
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Không tìm thấy đơn" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Lỗi tra đơn hàng" });
  }
});

export default router;
