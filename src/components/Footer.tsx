import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <footer className="bg-bg pt-16 pb-8 px-8 border-t border-gold/10">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {isHome ? (
            <a href="#hero" className="font-display text-2xl font-semibold text-gold inline-block mb-2 hover:text-gold-light transition-colors">
              TayGaff
            </a>
          ) : (
            <Link to="/" className="font-display text-2xl font-semibold text-gold inline-block mb-2 hover:text-gold-light transition-colors">
              TayGaff
            </Link>
          )}
          <p className="text-sm text-cream-muted mb-8">
            Premium men's tailoring & unstitched clothing.
          </p>
        </motion.div>

        <motion.nav
          className="flex flex-wrap justify-center gap-6 gap-y-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {footerLinks.map((link) =>
            isHome ? (
              <a key={link.href} href={link.href} className="text-sm text-cream-muted hover:text-gold transition-colors">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={`/${link.href}`} className="text-sm text-cream-muted hover:text-gold transition-colors">
                {link.label}
              </Link>
            )
          )}
        </motion.nav>

        <motion.div
          className="pt-8 border-t border-gold/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs text-cream-muted opacity-80">
            © {new Date().getFullYear()} TayGaff. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
