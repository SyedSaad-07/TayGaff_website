import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will get back to you soon.')
    setFormState({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="contact section bg-bg-elevated">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-start">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Book a Consultation</h2>
          <p className="text-cream-muted mb-8 text-[1.05rem]">
            Visit our store for fabric selection and measurements, or reach out
            to schedule a tailoring consultation. We're here to bring your
            vision to life.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Phone</span>
              <a href="tel:+923001234567" className="text-cream text-base hover:text-gold">+92 300 1234567</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Email</span>
              <a href="mailto:hello@taygaff.com" className="text-cream text-base hover:text-gold">hello@taygaff.com</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Address</span>
              <span className="text-cream text-base">Visit our store for the best experience</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full py-4 px-5 font-body text-base text-cream bg-bg-card border border-[rgba(var(--color-royal-rgb),0.2)] rounded-sm transition-[border-color] duration-300 placeholder:text-cream-muted placeholder:opacity-70 focus:outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(var(--color-royal-rgb),0.15)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full py-4 px-5 font-body text-base text-cream bg-bg-card border border-[rgba(var(--color-royal-rgb),0.2)] rounded-sm transition-[border-color] duration-300 placeholder:text-cream-muted placeholder:opacity-70 focus:outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(var(--color-royal-rgb),0.15)]"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full py-4 px-5 font-body text-base text-cream bg-bg-card border border-[rgba(var(--color-royal-rgb),0.2)] rounded-sm transition-[border-color] duration-300 placeholder:text-cream-muted placeholder:opacity-70 focus:outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(var(--color-royal-rgb),0.15)]"
          />
          <textarea
            name="message"
            placeholder="Tell us about your requirements..."
            value={formState.message}
            onChange={handleChange}
            rows={4}
            className="w-full py-4 px-5 font-body text-base text-cream bg-bg-card border border-[rgba(var(--color-royal-rgb),0.2)] rounded-sm transition-[border-color] duration-300 placeholder:text-cream-muted placeholder:opacity-70 focus:outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(var(--color-royal-rgb),0.15)] resize-y min-h-[120px]"
          />
          <button
            type="submit"
            className="py-4 px-8 text-sm font-semibold tracking-[0.1em] uppercase text-on-accent bg-gold rounded-sm transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
