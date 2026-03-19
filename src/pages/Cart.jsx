import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../context/CartContext"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import Button from "../components/Button"
import SectionReveal from "../components/SectionReveal"

function CartItem({ item, onUpdate, onRemove }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-5 rounded-2xl bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-[#1a0f0a]/5"
    >
      {/* Image */}
      <Link to={`/menu/${item.id}`} className="shrink-0">
        <div className="h-24 w-24 overflow-hidden rounded-xl sm:h-28 sm:w-28">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/menu/${item.id}`}
              className="block font-semibold text-[#1a0f0a] hover:text-[#c8956c] transition-colors truncate"
            >
              {item.name}
            </Link>
            <p className="mt-0.5 text-xs text-[#8a7b6b] uppercase tracking-wider">
              {item.category}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-[#8a7b6b] transition-all duration-300 hover:bg-red-50 hover:text-red-500"
            aria-label="Remove item"
          >
            <Trash2 size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          {/* Quantity controls */}
          <div className="flex items-center rounded-full border border-[#d4c4b0]">
            <button
              onClick={() => onUpdate(item.id, item.quantity - 1)}
              className="flex h-8 w-8 items-center justify-center text-[#8a7b6b] transition-colors hover:text-[#1a0f0a]"
              aria-label="Decrease quantity"
            >
              <Minus size={14} strokeWidth={1.5} />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-semibold text-[#1a0f0a]">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdate(item.id, item.quantity + 1)}
              className="flex h-8 w-8 items-center justify-center text-[#8a7b6b] transition-colors hover:text-[#1a0f0a]"
              aria-label="Increase quantity"
            >
              <Plus size={14} strokeWidth={1.5} />
            </button>
          </div>

          {/* Price */}
          <p className="font-serif text-lg text-[#1a0f0a]">{item.price}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Cart() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart()

  const whatsappMessage = items.length
    ? `Hi, I'd like to order:\n\n${items
        .map((i) => `${i.name} x${i.quantity} — ${i.price}`)
        .join("\n")}\n\nTotal: ₹ ${totalPrice}\n\nPlease confirm availability.`
    : ""
  const whatsappLink = `https://wa.me/916380614150?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Back */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm text-[#8a7b6b] hover:text-[#1a0f0a] transition-colors group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
          Continue Shopping
        </Link>

        <SectionReveal>
          <div className="mt-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                Your Cart
              </p>
              <h1 className="font-serif mt-3 text-3xl font-light text-[#1a0f0a] md:text-4xl lg:text-5xl">
                Order Summary
              </h1>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs uppercase tracking-wider text-[#8a7b6b] hover:text-red-500 transition-colors underline underline-offset-4"
              >
                Clear All
              </button>
            )}
          </div>
        </SectionReveal>

        {items.length === 0 ? (
          /* Empty state */
          <SectionReveal delay={0.1}>
            <div className="mt-20 flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f5ebe0]">
                <ShoppingBag size={36} className="text-[#c8956c]" strokeWidth={1} />
              </div>
              <h2 className="font-serif mt-8 text-2xl font-light text-[#1a0f0a]">
                Your cart is empty
              </h2>
              <p className="mt-3 max-w-[35ch] text-sm text-[#8a7b6b] leading-relaxed">
                Explore our menu and add your favourite items to get started.
              </p>
              <div className="mt-8">
                <Link to="/menu">
                  <Button variant="primary">Browse Menu</Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        ) : (
          /* Cart content */
          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            {/* Items list */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="popLayout">
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdate={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              </AnimatePresence>
            </div>

            {/* Order summary sidebar */}
            <SectionReveal direction="right" delay={0.2} className="lg:col-span-2">
              <div className="sticky top-28 rounded-3xl bg-white p-8 shadow-lg shadow-[#1a0f0a]/5">
                <h3 className="font-serif text-xl text-[#1a0f0a]">Summary</h3>

                <div className="mt-6 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="text-[#8a7b6b] truncate max-w-[60%]">
                        {item.name} <span className="text-[#c8956c]">x{item.quantity}</span>
                      </span>
                      <span className="text-[#1a0f0a] font-medium">
                        ₹ {Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#f5ebe0] pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#8a7b6b]">
                      Total ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </span>
                    <span className="font-serif text-2xl text-[#1a0f0a]">₹ {totalPrice}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="primary" className="w-full">
                      Order on WhatsApp
                    </Button>
                  </a>
                  <Link to="/menu" className="block">
                    <Button variant="outline" className="w-full">
                      Add More Items
                    </Button>
                  </Link>
                </div>

                <p className="mt-6 text-center text-[10px] uppercase tracking-wider text-[#8a7b6b]">
                  Orders confirmed via WhatsApp
                </p>
              </div>
            </SectionReveal>
          </div>
        )}
      </div>

      <div className="h-20 md:hidden" />
    </div>
  )
}
