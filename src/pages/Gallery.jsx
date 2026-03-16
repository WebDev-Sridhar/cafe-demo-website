import { useState } from 'react'
import { galleryFilters, galleryItems } from '../data/gallery'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

const getBentoSpan = (index) => {
  if (index === 0) return "md:col-span-2 md:row-span-2"
  if (index % 7 === 0) return "md:col-span-2"
  if (index % 5 === 0) return "md:row-span-2"
  return ""
}

function GalleryCard({ item, spanClass }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={`group relative overflow-hidden rounded-2xl bg-[#f5ebe0] cursor-pointer ${spanClass}`}
    >
      <img
        src={item.image}
        alt={item.caption}
        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium text-white">{item.caption}</p>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
            Gallery
          </p>
          <h1 className="font-serif mt-4 text-4xl font-light text-[#1a0f0a] md:text-5xl lg:text-6xl">
            Our Moments
          </h1>
          <p className="mt-4 max-w-[50ch] text-base text-[#8a7b6b] leading-relaxed">
            Food, drinks, and the space we call home.
          </p>
        </SectionReveal>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2 md:mt-16">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-500 ${
                activeFilter === filter
                  ? 'bg-[#1a0f0a] text-[#f5ebe0] shadow-md'
                  : 'bg-transparent text-[#8a7b6b] hover:bg-[#f5ebe0] hover:text-[#1a0f0a]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          key={activeFilter}
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((item, index) => (
            <GalleryCard key={item.id} item={item} spanClass={getBentoSpan(index)} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-[#8a7b6b]">No images in this category yet.</p>
        )}
      </div>

      <div className="h-20 md:hidden" />
    </div>
  )
}
