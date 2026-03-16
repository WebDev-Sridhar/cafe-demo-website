import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    }
  }
}

const child = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

export default function LuxuryText({ text, className = "", as: Tag = "h1" }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`overflow-hidden font-serif ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
        >
          {word + "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  )
}
