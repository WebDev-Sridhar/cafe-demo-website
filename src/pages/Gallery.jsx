// import { useState } from 'react'
// import { galleryFilters, galleryItems } from '../data/gallery'

// function GalleryCard({ item }) {
//   return (
//     <div className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-200 shadow-sm transition-all duration-300 hover:shadow-lg">
//       <img
//         src={item.image}
//         alt={item.caption}
//         className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
//       />
//       <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//         <p className="p-4 text-sm font-medium text-white">{item.caption}</p>
//       </div>
//     </div>
//   )
// }

// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState('All')
//   const filtered =
//     activeFilter === 'All'
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeFilter)

//   return (
//     <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-24">
//       <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
//         Gallery
//       </p>
//       <h1 className="mt-2 text-3xl font-bold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
//         Moments at The Brew Room
//       </h1>
//       <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
//         Food, drinks, and the space we call home. Scroll or filter to explore.
//       </p>

//       {/* Filter buttons */}
//       <div className="mt-10 flex flex-wrap gap-2 md:mt-14">
//         {galleryFilters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out md:px-6 md:py-3 md:text-base ${
//               activeFilter === filter
//                 ? 'bg-[#111827] text-white shadow-sm'
//                 : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-[#111827]'
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Grid with smooth filter animation */}
//       <div
//         key={activeFilter}
//         className="animate-fade-in-up mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
//       >
//         {filtered.map((item) => (
//           <GalleryCard key={item.id} item={item} />
//         ))}
//       </div>

//       {filtered.length === 0 && (
//         <p className="mt-12 text-center text-neutral-500">No images in this category yet.</p>
//       )}

//       <div className="h-20 md:hidden" />
//     </div>
//   )
// }



import { useState } from 'react'
import { galleryFilters, galleryItems } from '../data/gallery'

// Bento span pattern
const BENTO_SPANS = [
  'md:col-span-2 md:row-span-2', // hero
  '',
  '',
  '',
  '',
  'md:col-span-2',               // wide
  '',
  '',
  'md:row-span-2',               // tall
  '',
  'md:col-span-2',
  '',
  '',
  '',
  '',
  'md:col-span-2',
]

function getBentoSpan(index) {
  return BENTO_SPANS[index % BENTO_SPANS.length] || ''
}

function GalleryCard({ item, spanClass }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm transition-all duration-300 hover:shadow-lg ${spanClass}`}
    >
      <img
        src={item.image}
        alt={item.caption}
        className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="p-4 text-sm font-medium text-white">
          {item.caption}
        </p>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-24">
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
      <div
        key={activeFilter}
        className="animate-fade-in-up mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-3 lg:grid-cols-4"
        style={{
          gridAutoRows: '200px',
        }}
      >
        {filtered.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            spanClass={getBentoSpan(index)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-neutral-500">
          No images in this category yet.
        </p>
      )}

      <div className="h-20 md:hidden" />
    </div>
  )
}