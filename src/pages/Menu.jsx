import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { menuCategories, menuItems } from '../data/menu'
import { getWhatsAppUrl, getOrderMessage } from '../utils/whatsapp'
import { Link } from 'react-router-dom'


function MenuItemCard({ item }) {
  const orderUrl = getWhatsAppUrl(getOrderMessage(item.name))

  return (
    <Card className="flex flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Clickable Image */}
      <Link to={`/menu/${item.id}`} className="relative aspect-4/3 overflow-hidden block">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-300 ease-out hover:scale-105 rounded-2xl"
        />
        {item.veg && (
          <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-[#4a3728] shadow-sm">
            Veg
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        
        {/* Clickable Title */}
        <Link to={`/menu/${item.id}`}>
          <h3 className="text-lg font-semibold text-[#111827] hover:underline">
            {item.name}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {item.description}
        </p>

        <p className="mt-3 text-lg font-semibold text-[#4a3728]">
          {item.price}
        </p>

        {/* WhatsApp Button (separate anchor) */}
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full"
        >
          <Button variant="primary" className="w-full">
            WhatsApp Order
          </Button>
        </a>
      </div>
    </Card>
  )
}
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const filtered = menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        Menu
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
        What we serve
      </h1>
      <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
        Handcrafted drinks and fresh bites. Order via WhatsApp for quick pickup or delivery.
      </p>

      {/* Category tabs */}
      <div className="mt-10 overflow-x-auto pb-1 md:mt-14">
        <div
          className="flex gap-1 border-b border-neutral-200 md:gap-2"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls={`panel-${cat.toLowerCase()}`}
              id={`tab-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-t-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out md:px-6 md:py-3.5 md:text-base ${
                activeCategory === cat
                  ? 'bg-[#111827] text-white shadow-sm'
                  : 'text-neutral-600 hover:bg-neutral-100 hover:text-[#111827]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Item grid with smooth transition */}
      <div
        id={`panel-${activeCategory.toLowerCase()}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
        key={activeCategory}
        className="animate-fade-in-up pt-10 md:pt-14"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
  <MenuItemCard key={item.id} item={item} />
))}
        </div>
      </div>

      <div className="h-20 md:hidden" />
    </div>
  )
}
