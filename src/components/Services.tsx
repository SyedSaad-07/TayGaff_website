import { motion } from 'framer-motion'

const services = [
  {
    title: 'Shalwar Qameez',
    description: 'Classic traditional wear tailored to perfection. From everyday comfort to formal occasions.',
    icon: '◈',
  },
  {
    title: 'Paint Coat',
    description: 'Elegant waistcoats and formal coats crafted with precision for weddings and special events.',
    icon: '◇',
  },
  {
    title: 'Wedding Wear',
    description: 'Bespoke sherwanis, achkans, and ceremonial ensembles for your most important day.',
    icon: '◆',
  },
  {
    title: 'Custom Tailoring',
    description: 'Any men\'s garment — suits, blazers, kurta, or fusion wear. Your design, our expertise.',
    icon: '○',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-8 max-w-[1200px] mx-auto">
      <motion.span
        className="block text-xs text-cream-muted uppercase tracking-[0.25em] mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.span>
      <motion.h2
        className="font-display text-[clamp(2rem,4vw,3rem)] text-gold mb-4 tracking-[0.02em] relative after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-transparent after:mt-2 after:rounded-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Tailoring Services
      </motion.h2>

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            className="bg-bg-card p-8 rounded-md border border-gold/15 transition-colors transition-shadow duration-300 hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <span className="block text-2xl text-gold mb-4">{service.icon}</span>
            <h3 className="text-xl text-cream mb-3">{service.title}</h3>
            <p className="text-[0.95rem] text-cream-muted leading-relaxed">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
