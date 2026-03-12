import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="about section bg-bg-elevated">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title">TayGaff</h2>
          <p className="text-cream-muted mb-5 text-[1.05rem]">
            TayGaff is more than a clothing brand — we are custodians of tradition
            and masters of modern tailoring. Based on the belief that every man
            deserves garments that fit perfectly and reflect his style, we offer
            premium unstitched fabrics and expert tailoring for every occasion.
          </p>
          <p className="text-cream-muted mb-5 text-[1.05rem]">
            From the timeless Shalwar Qameez to sophisticated Paint Coats, wedding
            ensembles, and everyday wear, our skilled craftsmen bring your vision
            to life with precision and care.
          </p>
          <ul className="mt-8">
            <li className="flex items-center gap-3 text-cream mb-3 font-medium">
              <span className="text-gold text-sm">✦</span>
              Premium fabrics & materials
            </li>
            <li className="flex items-center gap-3 text-cream mb-3 font-medium">
              <span className="text-gold text-sm">✦</span>
              Expert master tailors
            </li>
            <li className="flex items-center gap-3 text-cream mb-3 font-medium">
              <span className="text-gold text-sm">✦</span>
              Custom fit guarantee
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] bg-bg-card rounded-lg overflow-hidden relative border border-[rgba(var(--color-royal-rgb),0.2)]">
            <div className="absolute inset-0 about-pattern-bg" />
            <span className="absolute bottom-8 left-8 font-display text-3xl italic text-gold opacity-80">
              Craftsmanship
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
