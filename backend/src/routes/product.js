import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET (api/products - lấy tất cả sản phẩm)

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ available: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi load products" });
  }
});

// GET (api/products/:id - Lấy 1 sản phẩm)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: "Lỗi tìm product id" });
  }
});

export default router;
