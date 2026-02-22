import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const child = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] // luxury cubic-bezier
    }
  }
}

export default function LuxuryText({ text, className }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`overflow-hidden ${className}`}
    >
      {text.split(" ").map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
        >
       {char + "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  )
}