import { motion } from 'framer-motion'

const galleryItems = [
  { label: 'Shalwar Qameez', accent: 1 },
  { label: 'Paint Coat', accent: 2 },
  { label: 'Wedding Sherwani', accent: 3 },
  { label: 'Formal Kurta', accent: 1 },
  { label: 'Custom Suit', accent: 2 },
  { label: 'Everyday Wear', accent: 3 },
]

const accentBg = {
  1: 'linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)',
  2: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-burgundy-deep) 100%)',
  3: 'linear-gradient(135deg, rgba(201, 169, 98, 0.3) 0%, var(--color-burgundy-deep) 100%)',
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-8 max-w-[1200px] mx-auto">
      <motion.span
        className="block text-xs text-cream-muted uppercase tracking-[0.25em] mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Work
      </motion.span>
      <motion.h2
        className="font-display text-[clamp(2rem,4vw,3rem)] text-gold mb-4 tracking-[0.02em] relative after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-transparent after:mt-2 after:rounded-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Craftsmanship Gallery
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 md:gap-5">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="aspect-[3/4] rounded-md overflow-hidden cursor-default group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-full flex items-end p-6">
              <div
                className="absolute inset-0 bg-bg-card transition-transform duration-500 group-hover:scale-105"
                style={{ background: accentBg[item.accent as keyof typeof accentBg] }}
              />
              <span className="relative z-10 font-display text-[1.1rem] font-medium text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
