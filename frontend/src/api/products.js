import api from "./axios.js";
export const getProducts = () => api.get("/products");
