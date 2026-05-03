import { useState, useEffect, useMemo } from "react";
import {
  getProducts,
  getCategories,
  createProduct,
  updateProduct,
  deleteProduct,
  createCategory,
} from "../../api/admin";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getProducts(), getCategories()])
      .then(([pRes, cRes]) => {
        setProducts(pRes.data);
        setCategories(cRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const grouped = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      items: products.filter((p) => p.category?._id === cat._id),
    }));
  }, [categories, products]);

  if (loading) return <p className="text-stone-400">Đang tải...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl text-coffee-950">Sản phẩm</h2>
        <button className="btn-primary text-sm px-5 py-2">+ Thêm sản phẩm</button>
      </div>

      <div className="space-y-8">
        {grouped.map((cat) => (
          <div key={cat._id}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xs font-bold tracking-widest uppercase text-coffee-500">
                {cat.name}
              </h3>
              <div className="flex-1 h-px bg-stone-200" />
              <span className="text-xs text-stone-400">{cat.items.length} sản phẩm</span>
            </div>

            {/* Product rows */}
            <div className="space-y-2">
              {cat.items.map((product) => (
                <div key={product._id} className="flex items-center gap-4 px-5 py-3 bg-white rounded shadow-sm">
                  {product.image && (
                    <img src={product.image} className="w-12 h-12 object-cover rounded shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-coffee-950">{product.name}</p>
                    <p className="text-xs text-stone-400 truncate">{product.description}</p>
                  </div>
                  <p className="text-sm font-semibold text-coffee-800 shrink-0">
                    {product.price.toLocaleString("vi-VN")}đ
                  </p>
                  <div className="flex gap-2 shrink-0">
                    <button className="px-3 py-1 text-xs border rounded border-stone-200 text-stone-600 hover:border-coffee-500 cursor-pointer">
                      Sửa
                    </button>
                    <button className="px-3 py-1 text-xs border rounded border-red-200 text-red-400 hover:border-red-400 cursor-pointer">
                      Xóa
                    </button>
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
    </div>
  );
}
