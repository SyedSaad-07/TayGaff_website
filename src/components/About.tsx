import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="bg-bg-elevated py-24 px-8 max-w-[1200px] mx-auto">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-xs text-cream-muted uppercase tracking-[0.25em] mb-6 font-medium">
            Our Story
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-gold mb-4 tracking-[0.02em] relative after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-transparent after:mt-2 after:rounded-full">
            TayGaff
          </h2>
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
          <ul className="mt-8 space-y-3">
            <li className="flex items-center gap-3 text-cream font-medium">
              <span className="text-gold text-sm">✦</span>
              Premium fabrics & materials
            </li>
            <li className="flex items-center gap-3 text-cream font-medium">
              <span className="text-gold text-sm">✦</span>
              Expert master tailors
            </li>
            <li className="flex items-center gap-3 text-cream font-medium">
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
          <div className="aspect-[4/5] bg-bg-card rounded-lg overflow-hidden relative border border-gold/20">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                background: `
                  linear-gradient(135deg, rgba(201, 169, 98, 1) 25%, transparent 25%),
                  linear-gradient(225deg, rgba(201, 169, 98, 1) 25%, transparent 25%),
                  linear-gradient(45deg, rgba(201, 169, 98, 1) 25%, transparent 25%),
                  linear-gradient(315deg, rgba(201, 169, 98, 1) 25%, transparent 25%)
                `,
                backgroundSize: '40px 40px',
              }}
            />
            <span className="absolute bottom-8 left-8 font-display text-3xl italic text-gold opacity-80">
              Craftsmanship
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
