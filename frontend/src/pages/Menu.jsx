import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layouts/Navbar";
import ProductCard from "../components/ui/ProductCard";
import ProductModal from "../components/ui/ProductModal";
import useProducts from "../hooks/useProducts";

const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "espresso", label: "Espresso" },
  { key: "cold", label: "Cold Brew" },
  { key: "non-coffee", label: "Non-Coffee" },
];

export default function Menu() {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = useMemo(() => {
    return products
      .filter((p) =>
        activeCategory === "all" ? true : p.category === activeCategory,
      )
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [products, activeCategory, search]);

  return (
    <>
      <Navbar variant='light' />

      {/* Hero */}
      <section className='px-6 pb-12 text-center border-b pt-28 md:pt-40 md:pb-16 bg-cream border-coffee-200/50'>
        <p className='section-label'>Thực đơn</p>
        <h1 className='mt-3 font-serif text-4xl font-bold tracking-wide md:text-7xl text-coffee-950'>
          Menu
        </h1>
        <p className='mt-4 text-sm tracking-widest uppercase text-coffee-500'>
          Espresso · Cold Brew · Non-Coffee
        </p>
      </section>

      <main className='bg-cream'>
        {/* Filter bar */}
        <div className='sticky top-0 z-30 border-b bg-cream/95 backdrop-blur-sm border-coffee-200/50'>
          <div className='flex flex-col max-w-6xl gap-4 px-6 py-5 mx-auto sm:flex-row sm:items-center sm:justify-between'>
            {/* Search */}
            <div className='relative w-full sm:flex-1 sm:max-w-xs'>
              <span className='absolute -translate-y-1/2 left-3 top-1/2'>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#c8a882'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </span>
              <input
                type='text'
                placeholder='Tìm thức uống...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full py-2 pl-10 pr-4 text-base bg-white border border-coffee-200 text-coffee-700 placeholder:text-coffee-300 focus:outline-none focus:border-gold'
              />
            </div>

            {/* Category tabs */}
            <div className='flex flex-wrap gap-2'>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`relative px-5 py-2 text-xs tracking-widest uppercase transition-colors ${
                    activeCategory === cat.key
                      ? "bg-coffee-800 text-white"
                      : "bg-white border border-coffee-200 text-coffee-700 hover:border-coffee-500"
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.key && (
                    <motion.span
                      layoutId='active-tab'
                      className='absolute inset-0 bg-coffee-800 -z-10'
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className='max-w-6xl px-6 py-16 mx-auto'>
          {loading && (
            <p className='py-24 text-center text-coffee-700/40'>Đang tải...</p>
          )}
          {error && <p className='py-24 text-center text-red-400'>{error}</p>}

          {!loading && filtered.length === 0 && (
            <div className='py-24 text-center'>
              <p className='font-serif text-2xl text-coffee-700/30'>
                Không tìm thấy thức uống nào
              </p>
            </div>
          )}

          <motion.div
            layout
            className='grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-12 md:grid-cols-3 lg:grid-cols-4'
          >
            <AnimatePresence mode='popLayout'>
              {filtered.map((product) => (
                <motion.div
                  key={product._id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProductCard
                    product={product}
                    onSelect={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
