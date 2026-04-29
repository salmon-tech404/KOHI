import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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
