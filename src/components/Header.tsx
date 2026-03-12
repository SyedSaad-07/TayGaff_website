import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#hero', label: 'Home', section: true },
  { href: '#about', label: 'About', section: true },
  { href: '#services', label: 'Services', section: true },
  { href: '#products', label: 'Products', section: true },
  { href: '#gallery', label: 'Gallery', section: true },
  { href: '#contact', label: 'Contact', section: true },
  { href: '/order-status', label: 'Order status', section: false },
]

export function Header() {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[10000] py-5 px-8 transition-all duration-300 isolate ${
        isScrolled ? 'bg-[rgba(253,252,249,0.95)] backdrop-blur-[12px] py-3 px-8' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between relative z-[10002]">
        {isHome ? (
          <a href="#hero" className="block transition-opacity duration-300 hover:opacity-90">
            <img src="/assets/logo.png" alt="TayGaff" className="block h-14 w-auto object-contain" />
          </a>
        ) : (
          <Link to="/" className="block transition-opacity duration-300 hover:opacity-90">
            <img src="/assets/logo.png" alt="TayGaff" className="block h-14 w-auto object-contain" />
          </Link>
        )}

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) =>
            link.section && !isHome ? (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-sm font-medium text-cream-muted tracking-[0.05em] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:text-gold hover:after:w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : link.section ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream-muted tracking-[0.05em] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:text-gold hover:after:w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-cream-muted tracking-[0.05em] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:text-gold hover:after:w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 translate-y-[-5px] translate-x-1' : ''
            }`}
          />
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-[rgba(253,252,249,0.98)] backdrop-blur-[12px] pt-[calc(80px+1.5rem)] px-8 pb-8 flex flex-col gap-0 z-[99999] overflow-y-auto md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => {
                const handleClick = () => {
                  requestAnimationFrame(() => {
                    setTimeout(() => setIsMobileMenuOpen(false), 150)
                  })
                }
                const sectionId = link.href.replace('#', '')
                const scrollToSection = (e: React.MouseEvent) => {
                  e.preventDefault()
                  const target = document.getElementById(sectionId)
                  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  handleClick()
                }
                return (
                  <div key={link.href} className="shrink-0">
                    {link.section && !isHome ? (
                      <Link
                        to={`/${link.href}`}
                        className="block text-lg text-cream py-4 border-b border-[rgba(var(--color-royal-rgb),0.2)] min-h-12 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] hover:text-gold"
                        onClick={handleClick}
                      >
                        {link.label}
                      </Link>
                    ) : link.section ? (
                      <a
                        href={link.href}
                        className="block text-lg text-cream py-4 border-b border-[rgba(var(--color-royal-rgb),0.2)] min-h-12 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] hover:text-gold"
                        onClick={scrollToSection}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="block text-lg text-cream py-4 border-b border-[rgba(var(--color-royal-rgb),0.2)] min-h-12 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] hover:text-gold"
                        onClick={handleClick}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  )
}
