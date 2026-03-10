import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative py-24 px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(92, 61, 56, 0.35) 0%, transparent 55%),
            radial-gradient(ellipse 50% 35% at 85% 70%, rgba(201, 169, 98, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 15% 80%, rgba(92, 61, 56, 0.2) 0%, transparent 50%),
            linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-elevated) 100%)
          `,
        }}
      />
      <div className="relative z-10 text-center max-w-[720px]">
        <motion.span
          className="inline-block text-xs font-medium tracking-[0.25em] uppercase text-gold mb-6 py-2 px-4 border border-gold/40 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium Men's Tailoring
        </motion.span>
        <motion.h1
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-cream leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Crafted Elegance
          <br />
          <em className="italic text-gold font-normal">for the Modern Gentleman</em>
        </motion.h1>
        <motion.p
          className="text-[clamp(1rem,2vw,1.2rem)] text-cream-muted leading-relaxed mb-10 max-w-[560px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unstitched fabrics & expert tailoring — Shalwar Qameez, Paint Coat,
          wedding wear & custom stitching for every occasion.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#services"
            className="inline-block py-4 px-8 text-sm font-medium tracking-[0.1em] uppercase rounded-sm bg-gold text-bg transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-block py-4 px-8 text-sm font-medium tracking-[0.1em] uppercase rounded-sm border border-cream-muted text-cream transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
