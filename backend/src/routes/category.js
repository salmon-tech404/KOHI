import express from "express";
import Category from "../models/Category.js";
import requireAuth from "../middleware/auth.js";

const router = express.Router();

// GET /api/categories — public (dropdown category)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Lỗi load category" });
  }
});
// POST /api/categories — admin only (Create new category)
router.post("/", requireAuth, async (req, res) => {
  try {
    const category = await Category.create({ name: req.body.name });
    res.status(201).json(category);
  } catch (error) {
    if (error.code === 11000) {
      // error code 11000 is dublicate value in Mongoose DB
      return res.status(400).json({ message: "Category đã tồn tại" });
    }
    res.status(500).json({ message: "Lỗi tạo category" });
  }
});

// DELETE /api/categories/:id — admin only
router.delete("/:id", requireAuth, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa category" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa category" });
  }
});

export default router;
