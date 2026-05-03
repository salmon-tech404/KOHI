import { useState, useEffect, useMemo } from "react";
import {
  getProducts,
  getCategories,
  createProduct,
  updateProduct,
  deleteProduct,
  createCategory,
} from "../../api/admin";

const EMPTY_FORM = {
  name: "",
  description: "",
  price: "",
  image: "",
  category: "",
  available: true,
};

function ProductModal({ product, categories, onClose, onSaved }) {
  const isEdit = !!product;
  const [form, setForm] = useState(
    isEdit
      ? {
          name: product.name,
          description: product.description || "",
          price: product.price,
          image: product.image || "",
          category: product.category?._id || "",
          available: product.available,
        }
      : EMPTY_FORM,
  );
  const [newCatName, setNewCatName] = useState("");
  const [addingCat, setAddingCat] = useState(false);
  const [saving, setSaving] = useState(false);
  const [catList, setCatList] = useState(categories);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleAddCategory = async () => {
    if (!newCatName.trim()) return;
    try {
      const res = await createCategory(newCatName.trim());
      setCatList((prev) => [...prev, res.data]);
      setForm((f) => ({ ...f, category: res.data._id }));
      setNewCatName("");
      setAddingCat(false);
    } catch {
      alert("Không thể thêm category");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, price: Number(form.price) };
      if (isEdit) {
        await updateProduct(product._id, payload);
      } else {
        await createProduct(payload);
      }
      onSaved();
    } catch {
      alert("Lỗi lưu sản phẩm");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <h3 className="font-serif text-lg text-coffee-950">
            {isEdit ? "Sửa sản phẩm" : "Thêm sản phẩm"}
          </h3>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div>
            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-coffee-700">
              Tên sản phẩm
            </label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-stone-200 focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-coffee-700">
              Mô tả
            </label>
            <textarea
              name="description"
              rows={2}
              value={form.description}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-stone-200 resize-none focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-coffee-700">
              Giá (đ)
            </label>
            <input
              name="price"
              type="number"
              required
              min={0}
              value={form.price}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-stone-200 focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-coffee-700">
              Ảnh (URL)
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-3 py-2 text-sm border border-stone-200 focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-coffee-700">
              Category
            </label>
            <div className="flex gap-2">
              <select
                name="category"
                required
                value={form.category}
                onChange={handleChange}
                className="flex-1 px-3 py-2 text-sm border border-stone-200 focus:outline-none focus:border-gold"
              >
                <option value="">-- Chọn category --</option>
                {catList.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setAddingCat((v) => !v)}
                className="px-3 py-2 text-sm border rounded border-stone-200 text-stone-500 hover:border-coffee-500 cursor-pointer"
              >
                +
              </button>
            </div>

            {addingCat && (
              <div className="flex gap-2 mt-2">
                <input
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="Tên category mới"
                  className="flex-1 px-3 py-2 text-sm border border-stone-200 focus:outline-none focus:border-gold"
                />
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="px-3 py-2 text-sm text-white rounded bg-coffee-950 cursor-pointer"
                >
                  Thêm
                </button>
              </div>
            )}
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
            />
            <span className="text-sm text-stone-600">Hiển thị trên menu</span>
          </label>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded border-stone-200 text-stone-600 cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 text-sm text-white rounded bg-coffee-950 disabled:opacity-50 cursor-pointer"
            >
              {saving ? "Đang lưu..." : "Lưu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | "add" | product object
  const [deletingId, setDeletingId] = useState(null);

  const fetchAll = () =>
    Promise.all([getProducts(), getCategories()]).then(([pRes, cRes]) => {
      setProducts(pRes.data);
      setCategories(cRes.data);
    });

  useEffect(() => {
    fetchAll().finally(() => setLoading(false));
  }, []);

  const grouped = useMemo(
    () =>
      categories.map((cat) => ({
        ...cat,
        items: products.filter((p) => p.category?._id === cat._id),
      })),
    [categories, products],
  );

  const handleSaved = () => {
    setModal(null);
    fetchAll();
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert("Xóa thất bại");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <p className="text-stone-400">Đang tải...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl text-coffee-950">Sản phẩm</h2>
        <button
          onClick={() => setModal("add")}
          className="btn-primary text-sm px-5 py-2"
        >
          + Thêm sản phẩm
        </button>
      </div>

      <div className="space-y-8">
        {grouped.map((cat) => (
          <div key={cat._id}>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xs font-bold tracking-widest uppercase text-coffee-500">
                {cat.name}
              </h3>
              <div className="flex-1 h-px bg-stone-200" />
              <span className="text-xs text-stone-400">
                {cat.items.length} sản phẩm
              </span>
            </div>

            <div className="space-y-2">
              {cat.items.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center gap-4 px-5 py-3 bg-white rounded shadow-sm"
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-12 h-12 rounded shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-coffee-950">
                      {product.name}
                    </p>
                    <p className="text-xs text-stone-400 truncate">
                      {product.description}
                    </p>
                  </div>
                  {!product.available && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-400">
                      Ẩn
                    </span>
                  )}
                  <p className="text-sm font-semibold text-coffee-800 shrink-0">
                    {product.price.toLocaleString("vi-VN")}đ
                  </p>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setModal(product)}
                      className="px-3 py-1 text-xs border rounded border-stone-200 text-stone-600 hover:border-coffee-500 cursor-pointer"
                    >
                      Sửa
                    </button>
                    {deletingId === product._id ? (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="px-3 py-1 text-xs border rounded border-red-400 text-red-500 cursor-pointer"
                        >
                          Xác nhận
                        </button>
                        <button
                          onClick={() => setDeletingId(null)}
                          className="px-3 py-1 text-xs border rounded border-stone-200 text-stone-400 cursor-pointer"
                        >
                          Hủy
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeletingId(product._id)}
                        className="px-3 py-1 text-xs border rounded border-red-200 text-red-400 hover:border-red-400 cursor-pointer"
                      >
                        Xóa
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {cat.items.length === 0 && (
                <p className="text-xs text-stone-300 px-2">Chưa có sản phẩm</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <ProductModal
          product={modal === "add" ? null : modal}
          categories={categories}
          onClose={() => setModal(null)}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
}
