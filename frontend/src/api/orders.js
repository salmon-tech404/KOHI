import api from "./axios.js";

export const createOrder = (orderData) => api.post("/orders", orderData);
