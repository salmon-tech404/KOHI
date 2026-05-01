import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items: [],
  // thêm item vào cart
  addItem: (product) => {
    const existing = get().items.find((i) => i._id === product._id);
    if (existing) {
      set((state) => ({
        items: state.items.map(
          (i) => (i._id === product._id ? { ...i, qty: i.qty + 1 } : i),
          // toán tử 3 ngôi - condition? A : B
        ),
      }));
    } else {
      set((state) => ({ items: [...state.items, { ...product, qty: 1 }] }));
    }
  },
  // xoa item khoi cart
  removeItem: (id) => {
    set((state) => ({ items: state.items.filter((i) => i._id !== id) }));
  },
  // Update item trong cart
  updateQty: (id, qty) =>
    set((state) => ({
      items: state.items.map((i) => (i._id === id ? { ...i, qty } : i)),
    })),
  // clear item trong cart
  clearCart: () => set({ items: [] }),

  // tổng giá trong cart & Tổng item trong cart
  getTotalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),

  getTotalItems: () => get().items.reduce((sum, i) => sum + i.qty, 0),
}));

export default useCartStore;
