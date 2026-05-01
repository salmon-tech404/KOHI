import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, require: true },
    phone: { type: String, required: true },
    pickupTime: { type: String, required: true },
    note: { type: String },
    items: [orderItemSchema],
    total: { type: Number, required: true },
    status: { type: String, enum: ["pending", "confirmed", "ready", "done"] },
  },
  { timestamps: true },
);

export default mongoose.model("Order", orderSchema);
