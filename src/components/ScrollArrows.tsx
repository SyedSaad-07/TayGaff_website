import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTIONS = ['#hero', '#about', '#services', '#products', '#gallery', '#contact']
const THRESHOLD = 80

export function ScrollArrows() {
  const [scrollY, setScrollY] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY)
      setMaxScroll(
        document.documentElement.scrollHeight - window.innerHeight
      )
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll)
    window.addEventListener('resize', updateScroll)
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  const isAtTop = scrollY < THRESHOLD
  const isAtBottom = maxScroll > 0 && scrollY >= maxScroll - THRESHOLD

  const getCurrentSectionIndex = () => {
    let idx = 0
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.querySelector(SECTIONS[i])
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.4) {
          idx = i
          break
        }
      }
    }
    return idx
  }

  const scrollDown = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isAtBottom) return
    const currentIndex = getCurrentSectionIndex()
    const nextIndex = Math.min(currentIndex + 1, SECTIONS.length - 1)
    document.querySelector(SECTIONS[nextIndex])?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollUp = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isAtTop) return
    const currentIndex = getCurrentSectionIndex()
    const prevIndex = Math.max(currentIndex - 1, 0)
    document.querySelector(SECTIONS[prevIndex])?.scrollIntoView({ behavior: 'smooth' })
  }

  const arrowSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-down">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  )

  const arrowUpSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-up">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )

  return (
    <>
      <AnimatePresence>
        {!isAtBottom && (
          <motion.a
            href="#about"
            className="fixed bottom-8 left-8 flex flex-col items-center gap-2 text-cream-muted text-xs tracking-[0.2em] z-[100] transition-colors hover:text-gold sm:bottom-20"
            onClick={scrollDown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <span>Scroll</span>
            {arrowSvg}
          </motion.a>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isAtTop && (
          <motion.a
            href="#hero"
            className="fixed bottom-8 right-8 flex flex-col items-center gap-2 text-cream-muted text-xs tracking-[0.2em] z-[100] transition-colors hover:text-gold"
            onClick={scrollUp}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <span>Scroll</span>
            {arrowUpSvg}
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
