import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { menuItems } from '../data/menu'
import Button from '../components/Button'
import SectionReveal from '../components/SectionReveal'
import { useCart } from '../context/CartContext'
import { ShoppingBag, Check } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const product = menuItems.find((item) => item.id === id)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-[1200px] px-6 py-32 text-center">
        <p className="text-[#8a7b6b]">Product not found.</p>
        <Link to="/menu" className="mt-4 inline-block text-[#1a0f0a] underline underline-offset-4">
          Back to Menu
        </Link>
      </div>
    )
  }

  const whatsappMessage = `Hi, I'd like to order:\n\n${product.name}\nQuantity: ${quantity}\n\nPlease confirm availability.`
  const whatsappLink = `https://wa.me/916380614150?text=${encodeURIComponent(whatsappMessage)}`

  const related = menuItems
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Back */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm text-[#8a7b6b] hover:text-[#1a0f0a] transition-colors group"
        >
          <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Menu
        </Link>

        <SectionReveal>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl bg-[#f5ebe0] shadow-xl shadow-[#1a0f0a]/8">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover aspect-square" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                {product.category}
              </p>
              <h1 className="font-serif mt-3 text-3xl font-light text-[#1a0f0a] md:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#8a7b6b]">{product.description}</p>

              <p className="mt-6 font-serif text-3xl text-[#1a0f0a]">{product.price}</p>

              {product.veg && (
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  Vegetarian
                </span>
              )}

              {/* Quantity */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-[#8a7b6b]">Quantity</span>
                <div className="flex items-center rounded-full border border-[#d4c4b0]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 text-lg text-[#8a7b6b] hover:text-[#1a0f0a] transition-colors"
                  >
                    &minus;
                  </button>
                  <span className="px-3 text-sm font-semibold text-[#1a0f0a] min-w-[2rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 text-lg text-[#8a7b6b] hover:text-[#1a0f0a] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleAddToCart}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-500 ${
                    added
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-[#1a0f0a] text-[#f5ebe0] shadow-lg shadow-[#1a0f0a]/20 hover:bg-[#2c1810] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={16} strokeWidth={2} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} strokeWidth={1.5} />
                      Add to Cart
                    </>
                  )}
                </button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Order on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Related */}
        {related.length > 0 && (
          <SectionReveal delay={0.2}>
            <div className="mt-24">
              <h2 className="font-serif text-2xl font-light text-[#1a0f0a] md:text-3xl">
                You Might Also Like
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3 md:gap-6">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    to={`/menu/${item.id}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1a0f0a]/8"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#1a0f0a] group-hover:text-[#c8956c] transition-colors">{item.name}</h3>
                      <p className="mt-1 text-sm text-[#8a7b6b] line-clamp-2">{item.description}</p>
                      <p className="mt-2 font-serif text-lg text-[#c8956c]">{item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>
        )}
      </div>
    </div>
  )
}
