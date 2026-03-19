import { useState } from 'react'
import { menuCategories, menuItems } from '../data/menu'
import { useCart } from '../context/CartContext'
import { ShoppingBag, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

function MenuItemCard({ item }) {
  const { addItem, items } = useCart()
  const [added, setAdded] = useState(false)
  const inCart = items.some((i) => i.id === item.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link to={`/menu/${item.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1a0f0a]/8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {item.veg && (
            <span className="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700 shadow-sm">
              Veg
            </span>
          )}
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-[#1a0f0a] group-hover:text-[#c8956c] transition-colors duration-300">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-[#8a7b6b] line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
            <span className="shrink-0 text-lg font-serif font-medium text-[#c8956c]">
              {item.price}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all duration-500 ${
                added
                  ? "bg-green-600 text-white shadow-md"
                  : inCart
                    ? "bg-[#f5ebe0] text-[#1a0f0a] hover:bg-[#1a0f0a] hover:text-[#f5ebe0]"
                    : "bg-[#1a0f0a] text-[#f5ebe0] shadow-lg shadow-[#1a0f0a]/20 hover:bg-[#2c1810]"
              }`}
            >
              {added ? (
                <>
                  <Check size={14} strokeWidth={2} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  {inCart ? "Add More" : "Add to Cart"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const filtered = menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Header */}
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
            The Menu
          </p>
          <h1 className="font-serif mt-4 text-4xl font-light text-[#1a0f0a] md:text-5xl lg:text-6xl">
            What We Serve
          </h1>
          <p className="mt-4 max-w-[50ch] text-base text-[#8a7b6b] leading-relaxed">
            Handcrafted drinks and fresh bites, made with care every single day.
          </p>
        </SectionReveal>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap gap-2 md:mt-16">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-500 ${
                activeCategory === cat
                  ? 'bg-[#1a0f0a] text-[#f5ebe0] shadow-md'
                  : 'bg-transparent text-[#8a7b6b] hover:bg-[#f5ebe0] hover:text-[#1a0f0a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12"
        >
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>

      <div className="h-20 md:hidden" />
    </div>
  )
}
