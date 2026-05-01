import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const products = [
  // --- Espresso ---
  {
    name: "Espresso",
    description:
      "Thuần túy, đậm đà — một shot espresso nguyên chất từ hạt Arabica rang vừa.",
    price: 35000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80",
  },
  {
    name: "Americano",
    description: "Espresso pha loãng với nước nóng, vị đậm đà thanh khiết.",
    price: 45000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=800&q=80",
  },
  {
    name: "Cappuccino",
    description: "Espresso kết hợp sữa hấp và bọt sữa mịn, cân bằng hoàn hảo.",
    price: 55000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    name: "Flat White",
    description:
      "Espresso double shot, sữa hấp mịn rót theo tỉ lệ chuẩn — ít bọt, đậm vị.",
    price: 55000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80",
  },
  // --- Cold ---
  {
    name: "Cold Brew",
    description: "Cà phê ủ lạnh 12 giờ, vị ngọt tự nhiên, ít chua.",
    price: 60000,
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  },
  {
    name: "Iced Latte",
    description:
      "Espresso double shot rót trên đá và sữa tươi lạnh, sảng khoái.",
    price: 55000,
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?w=800&q=80",
  },
  {
    name: "Iced Americano",
    description:
      "Vị espresso nguyên bản trên nền đá lạnh, đơn giản mà tinh tế.",
    price: 45000,
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=800&q=80",
  },
  // --- Non-coffee ---
  {
    name: "Matcha Latte",
    description: "Matcha Nhật Bản hảo hạng kết hợp sữa tươi béo ngậy.",
    price: 65000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
  },
  {
    name: "Trà Ô Long Sữa",
    description:
      "Trà ô long thượng hạng pha cùng sữa tươi, hương thơm dịu nhẹ.",
    price: 55000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    name: "Chocolate Nóng",
    description: "Chocolate Bỉ đậm đà kết hợp sữa hấp — ấm áp từng ngụm.",
    price: 60000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80",
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ Connected to MongoDB");

    await Product.deleteMany();
    console.log("✓ Cleared existing products");

    await Product.insertMany(products);
    console.log(`✓ Inserted ${products.length} products`);

    mongoose.disconnect();
    console.log("✓ Done");
  } catch (error) {
    console.error("✗ Seed failed:", error);
    process.exit(1);
  }
};

seed();
