import api from "./axios";
import { getToken } from "../hooks/useAdminAuth";

export const loginAdmin = (data) => api.post("/admin/login", data);

export const getOrders = () =>
  api.get("/orders", { headers: { Authorization: `Bearer ${getToken()}` } });

export const updateOrderStatus = (id, status) =>
  api.patch(
    `/orders/${id}/status`,
    { status },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    },
  );

export const getProducts = () => api.get("/products");

export const createProduct = (data) =>
  api.post("/products", data, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const updateProduct = (id, data) =>
  api.put(`/products/${id}`, data, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const deleteProduct = (id) =>
  api.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const getCategories = () => api.get("/categories");

export const createCategory = (name) =>
  api.post(
    "/categories",
    { name },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    },
  );
