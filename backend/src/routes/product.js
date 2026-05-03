import express from "express";
import Product from "../models/Product.js";
import requireAuth from "../middleware/auth.js";

const router = express.Router();

// GET /api/products — public trả available:true, admin dùng ?all=true để lấy hết
router.get("/", async (req, res) => {
  try {
    const filter = req.query.all === "true" ? {} : { available: true };
    const products = await Product.find(filter).populate("category");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi load products" });
  }
});

// GET (api/products/:id - Lấy 1 sản phẩm)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Lỗi tìm product id" });
  }
});
// POST /api/products — thêm sản phẩm mới (admin only)
router.post("/", requireAuth, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Lỗi tạo sản phẩm" });
  }
});

// PUT /api/products/:id — sửa sản phẩm (admin only)
router.put("/:id", requireAuth, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!product)
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Lỗi cập nhật sản phẩm" });
  }
});

// DELETE /api/products/:id — xóa sản phẩm (admin only)
router.delete("/:id", requireAuth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa sản phẩm" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi xóa sản phẩm" });
  }
});
export default router;
