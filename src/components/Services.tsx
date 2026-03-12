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
    <section id="services" className="services section">
      <motion.span
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.span>
      <motion.h2
        className="section-title"
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
            className="bg-bg-card p-8 rounded-md border border-[rgba(var(--color-royal-rgb),0.15)] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(var(--color-royal-rgb),0.4)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
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
