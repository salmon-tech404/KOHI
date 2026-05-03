import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/category.js";
import orderRoutes from "./routes/order.js";
import adminRoutes from "./routes/authAdmin.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✓ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`✓ Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("✗ Failed to connect to MongoDB", error);
  });
