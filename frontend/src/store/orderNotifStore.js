import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrderNotifStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      clear: () => set({ count: 0 }),
    }),
    { name: "kohi_order_notif" },
  ),
);

export default useOrderNotifStore;
