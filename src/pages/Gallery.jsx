

import { useState } from 'react'
import { galleryFilters, galleryItems } from '../data/gallery'
import { motion } from 'framer-motion'

// Bento span pattern
const BENTO_SPANS = [
  "md:col-span-2 md:row-span-2", // hero
  "",
  "",
  "",
  "",
  "md:col-span-2",              // wide
  "",
  "",
  "md:row-span-2",              // tall
  "",
];

const getBentoSpan = (index) => {
  if (index === 0) return "md:col-span-2 md:row-span-2"; // hero
  if (index % 7 === 0) return "md:col-span-2";
  if (index % 5 === 0) return "md:row-span-2";
  return "";
};

function GalleryCard({ item, spanClass }) {
          const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}
  return (
   <motion.div variants={fadeInUp}
      className={`group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm  hover:shadow-lg ${spanClass}`}
    >
      <img
        src={item.image}
        alt={item.caption}
        className="h-full w-full object-cover ease-out transition duration-300 group-hover:scale-105  "
      />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="p-4 text-sm font-medium text-white">
          {item.caption}
        </p>
      </div>
            </motion.div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)



  return (
    <div className="mx-auto max-w-300 px-4 py-16 md:px-6 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        Gallery
      </p>

      <h1 className="mt-2 text-3xl font-bold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
        Moments at The Brew Room
      </h1>

      <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
        Food, drinks, and the space we call home. Scroll or filter to explore.
      </p>

      {/* Filter buttons */}
      <div className="mt-10 flex flex-wrap gap-2 md:mt-14">
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out md:px-6 md:py-3 md:text-base ${
              activeFilter === filter
                ? 'bg-[#111827] text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-[#111827]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Bento Grid Layout */}
            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }}
        key={activeFilter}
        className=" mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-3 lg:grid-cols-4"
      >
        {filtered.map((item, index) => (
          
        
          <GalleryCard
               key={item.id}
            item={item}
            spanClass={getBentoSpan(index)}
          />
 
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-neutral-500">
          No images in this category yet.
        </p>
      )}

      <div className="h-20 md:hidden" />
    </div>
  )
}