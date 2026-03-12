import { motion } from 'framer-motion'

const galleryItems = [
  { label: 'Shalwar Qameez', accent: 1 },
  { label: 'Paint Coat', accent: 2 },
  { label: 'Wedding Sherwani', accent: 3 },
  { label: 'Formal Kurta', accent: 1 },
  { label: 'Custom Suit', accent: 2 },
  { label: 'Everyday Wear', accent: 3 },
]

const accentBgClass = [
  'gallery-item-bg-1',
  'gallery-item-bg-2',
  'gallery-item-bg-3',
]

export function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <motion.span
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Work
      </motion.span>
      <motion.h2
        className="section-title"
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
            className="group aspect-[3/4] rounded-md overflow-hidden cursor-default"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-full flex items-end p-6">
              <div
                className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${accentBgClass[item.accent - 1]}`}
              />
              <span className="relative z-10 font-display text-lg font-medium text-on-dark [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
