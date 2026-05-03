import api from "./axios.js";

export const createOrder = (orderData) => api.post("/orders", orderData);

export const cancelOrder = (id) => api.patch(`/orders/${id}/cancel`);

export const getOrderById = (id) => api.get(`/orders/${id}`);
