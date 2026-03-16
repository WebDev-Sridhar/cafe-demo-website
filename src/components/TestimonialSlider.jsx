import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialSlider({ reviews }) {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length, isHovered])

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(reviews[index].rating)].map((_, i) => (
              <span key={i} className="text-[#c8956c] text-sm">&#9733;</span>
            ))}
            {[...Array(5 - reviews[index].rating)].map((_, i) => (
              <span key={i} className="text-[#d4c4b0] text-sm">&#9733;</span>
            ))}
          </div>
          <p className="font-serif text-xl md:text-2xl font-light leading-relaxed text-[#1a0f0a] italic">
            &ldquo;{reviews[index].text}&rdquo;
          </p>
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1a0f0a]">
              {reviews[index].name}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-3 mt-10">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "bg-[#c8956c] w-8" : "bg-[#d4c4b0] w-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
