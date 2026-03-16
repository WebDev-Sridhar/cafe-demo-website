import { motion } from "framer-motion";

const directionMap = {
  up: { opacity: 0, y: 80 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -80 },
  right: { opacity: 0, x: 80 },
  scale: { opacity: 0, scale: 0.9 },
  none: { opacity: 0 },
};

export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.9,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={directionMap[direction] || directionMap.up}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
