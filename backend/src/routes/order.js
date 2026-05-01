import express from "express";
import Order from "../models/Order.js";

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

export default router;
