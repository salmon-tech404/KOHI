import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../hooks/useAdminAuth";

export default function AdminRoute() {
  if (!isAuthenticated()) {
    return <Navigate to='/admin/login' replace />;
  }
  return <Outlet />;
}
