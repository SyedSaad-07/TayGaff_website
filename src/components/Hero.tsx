import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative py-24 px-8 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 hero-bg-gradient z-0" />
      <div className="relative z-10 text-center max-w-[720px]">
        <motion.span
          className="inline-block text-xs font-medium tracking-[0.25em] uppercase text-gold mb-6 py-2 px-4 border border-[rgba(var(--color-royal-rgb),0.4)] rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium Men's Tailoring
        </motion.span>
        <motion.h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-cream leading-[1.15] mb-6 font-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Crafted Elegance
          <br />
          <em className="italic text-gold font-normal">for the Modern Gentleman</em>
        </motion.h1>
        <motion.p
          className="text-[clamp(1rem,2vw,1.2rem)] text-cream-muted leading-[1.7] mb-10 max-w-[560px] mx-auto"
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
            className="inline-block py-4 px-8 text-sm font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-300 bg-gold text-on-accent hover:bg-gold-light hover:-translate-y-0.5"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-block py-4 px-8 text-sm font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-300 border border-cream-muted text-cream hover:border-gold hover:text-gold"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
