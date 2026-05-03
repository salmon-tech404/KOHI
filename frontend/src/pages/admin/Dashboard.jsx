import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { removeToken } from "../../hooks/useAdminAuth";

const NAV = [
  { to: "/admin/orders", label: "Đơn hàng" },
  { to: "/admin/products", label: "Sản phẩm" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/admin/login");
  };

  return (
    <div className='flex min-h-screen bg-stone-100'>
      {/* Sidebar */}
      <aside className='flex flex-col w-56 bg-coffee-950'>
        <div className='px-6 py-8'>
          <h1 className='font-serif text-2xl text-white'>Kohi</h1>
          <p className='mt-1 text-xs tracking-widest uppercase text-white/30'>
            Admin
          </p>
        </div>

        <nav className='flex-1 px-3'>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm tracking-wide rounded mb-1 transition-colors ${
                  isActive
                    ? "bg-gold text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className='px-4 py-3 mx-3 mb-6 text-sm text-left transition-colors cursor-pointer text-white/40 hover:text-white'
        >
          Đăng xuất
        </button>
      </aside>

      {/* Main content */}
      <main className='flex-1 p-8 overflow-auto'>
        <Outlet />
      </main>
    </div>
  );
}
