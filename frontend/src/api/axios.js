// axios.js là file cấu hình trung tâm cho tất cả API calls trong app.
import axios from "axios";
import { removeToken } from "../hooks/useAdminAuth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  },
);

export default api;
