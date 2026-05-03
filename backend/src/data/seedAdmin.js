import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ Connected to MongoDB");

    await Admin.deleteMany();

    await Admin.create({
      username: "admin",
      password: "adminkohi2026",
    });
    console.log(
      "✓ Admin account created — username: admin / password: adminkohi2026",
    );
    mongoose.disconnect();
  } catch (error) {
    console.error("✗ Seed admin failed:", error);
    process.exit(1);
  }
};
seed();
