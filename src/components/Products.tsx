import { motion } from 'framer-motion'

const products = [
  {
    name: 'Cotton Unstitched',
    description: 'Breathable, comfortable cotton for everyday Shalwar Qameez.',
    tag: 'Popular',
  },
  {
    name: 'Linen Collection',
    description: 'Premium linen for a refined, summer-ready look.',
    tag: 'New',
  },
  {
    name: 'Silk & Chiffon',
    description: 'Luxurious fabrics for weddings and formal occasions.',
    tag: null,
  },
  {
    name: 'Embroidered Fabrics',
    description: 'Hand-picked embroidered pieces for statement wear.',
    tag: null,
  },
]

export function Products() {
  return (
    <section id="products" className="products section relative bg-bg-elevated">
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-burgundy-deep to-transparent opacity-50 pointer-events-none" />
      <motion.span
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Shop With Us
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Unstitched Clothing
      </motion.h2>
      <motion.p
        className="text-cream-muted max-w-[560px] mx-auto mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Choose from our curated selection of premium unstitched fabrics.
        We'll tailor them to your exact measurements.
      </motion.p>

      <div className="grid gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <motion.article
            key={product.name}
            className="bg-bg-card rounded-lg overflow-hidden border border-[rgba(var(--color-royal-rgb),0.15)] transition-[border-color] duration-300 hover:border-[rgba(var(--color-royal-rgb),0.4)] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {product.tag && (
              <span className="absolute top-4 right-4 text-[0.7rem] font-semibold tracking-[0.1em] py-1.5 px-3 bg-gold text-on-accent rounded-full z-10">
                {product.tag}
              </span>
            )}
            <div className="aspect-square bg-bg relative">
              <div className="absolute inset-0 products-card-pattern" />
            </div>
            <div className="p-6">
              <h3 className="text-[1.1rem] text-cream mb-2">{product.name}</h3>
              <p className="text-sm text-cream-muted leading-normal">{product.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a
          href="#contact"
          className="inline-block py-4 px-8 text-sm font-medium tracking-[0.1em] text-gold border border-gold rounded-sm transition-all duration-300 hover:bg-gold hover:text-on-accent"
        >
          Visit Store / Inquire
        </a>
      </motion.div>
    </section>
  )
}
