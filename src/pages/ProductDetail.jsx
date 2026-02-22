import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { menuItems } from '../data/menu'
import Button from '../components/Button'

export default function ProductDetail() {
  const { id } = useParams()
  const product = menuItems.find((item) => item.id === id)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="mx-auto max-w-300 px-4 py-24 text-center">
        <p className="text-neutral-500">Product not found.</p>
        <Link
          to="/menu"
          className="mt-4 inline-block text-[#111827] underline underline-offset-4"
        >
          Back to Menu
        </Link>
      </div>
    )
  }

  const whatsappMessage = `Hi, I’d like to order:\n\n${product.name}\nQuantity: ${quantity}\n\nPlease confirm availability.`
  const whatsappLink = `https://wa.me/916380614150?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <div className="mx-auto max-w-300 px-4 py-16 md:px-6 md:py-24">
      
      {/* Back Link */}
      <Link
        to="/menu"
        className="text-sm text-neutral-500 hover:text-[#111827] hover:underline underline-offset-4"
      >
        ← Back to Menu
      </Link>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            {product.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#111827] md:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            {product.description}
          </p>

          <p className="mt-6 text-2xl font-semibold text-[#111827]">
            {product.price}
          </p>

          {/* Veg Indicator */}
          {product.veg && (
            <p className="mt-2 text-sm font-medium text-green-600">
              ● Vegetarian
            </p>
          )}

          {/* Quantity Selector */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-medium text-[#111827]">
              Quantity:
            </span>
            <div className="flex items-center border border-neutral-300 rounded-xl">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-lg text-neutral-600 hover:text-[#111827]"
              >
                -
              </button>
              <span className="px-4 py-2 text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 text-lg text-neutral-600 hover:text-[#111827]"
              >
                +
              </button>
            </div>
          </div>

          {/* WhatsApp Order Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
             <Button variant="primary" className="w-full mt-6">Order on WhatsApp</Button>
   
          </a>
        </div>
      </div>
      {/* Related Products */}
<div className="mt-20">
  <h2 className="text-2xl font-bold text-[#111827] md:text-3xl">
    Related Items
  </h2>

  <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {menuItems
      .filter(
        (item) =>
          item.category === product.category &&
          item.id !== product.id
      )
      .slice(0, 3)
      .map((item) => (
        <Link
          key={item.id}
          to={`/menu/${item.id}`}
          className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
        >
          <div className="aspect-4/3 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-[#111827] group-hover:underline">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
              {item.description}
            </p>
            <p className="mt-3 text-lg font-semibold text-accent">
              {item.price}
            </p>
          </div>
        </Link>
      ))}
  </div>
</div>
    </div>
  )
}