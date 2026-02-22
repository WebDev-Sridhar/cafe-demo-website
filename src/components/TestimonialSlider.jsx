import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialSlider({ reviews }) {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg "
        >
            <p className="text-sm text-yellow-500 mb-2">
              {"★".repeat(reviews[index].rating) + "☆".repeat(5 - reviews[index].rating)}
            </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            "{reviews[index].text}"
          </p>
          <p className="mt-6 font-semibold text-[#111827]">
            — {reviews[index].name}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-accent w-6" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}