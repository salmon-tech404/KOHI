import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../api/admin";
import { setToken } from "../../hooks/useAdminAuth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await loginAdmin(form);
      setToken(res.data.token);
      navigate("/admin");
    } catch {
      setError("Sai tên đăng nhập hoặc mật khẩu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-stone-100'>
      <div className='w-full max-w-sm p-10 bg-white shadow-sm'>
        <h1 className='mb-1 font-serif text-3xl text-coffee-950'>Kohi</h1>
        <p className='mb-8 text-xs tracking-widest uppercase text-coffee-400'>
          Admin Dashboard
        </p>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='block mb-1 text-xs tracking-widest uppercase text-coffee-600'>
              Tên đăng nhập
            </label>
            <input
              type='text'
              required
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className='w-full px-3 py-2 text-sm border border-coffee-200 focus:outline-none focus:border-gold'
            />
          </div>
          <div>
            <label className='block mb-1 text-xs tracking-widest uppercase text-coffee-600'>
              Mật khẩu
            </label>
            <input
              type='password'
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className='w-full px-3 py-2 text-sm border border-coffee-200 focus:outline-none focus:border-gold'
            />
          </div>

          {error && <p className='text-xs text-red-500'>{error}</p>}

          <button
            type='submit'
            disabled={loading}
            className='w-full cursor-pointer btn-primary'
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
}
