import { motion } from 'framer-motion'

export function OrderStatus() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-24 px-8 mt-20">
      <motion.h1
        className="font-display text-[clamp(3.5rem,10vw,6rem)] font-semibold text-gold tracking-[0.05em] text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Coming Soon
      </motion.h1>
      <motion.p
        className="text-base text-cream-muted tracking-[0.1em] uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Track your order status — launching soon.
      </motion.p>
    </main>
  )
}
