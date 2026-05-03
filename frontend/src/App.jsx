import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderInfo from "./pages/OrderInfo";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminOrders from "./pages/admin/Orders";
import AdminProducts from "./pages/admin/Products";
import AdminRoute from "./routes/AdminRoute";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-success' element={<OrderSuccess />} />
        <Route path='/order-info' element={<OrderInfo />} />
        <Route path='/blog' element={<Blog />} />

        {/* Admin auth */}
        <Route path='/admin/login' element={<AdminLogin />} />

        {/* Admin protected */}
        <Route element={<AdminRoute />}>
          <Route path='/admin' element={<Dashboard />}>
            <Route path='orders' element={<AdminOrders />} />
            <Route path='products' element={<AdminProducts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
