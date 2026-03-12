/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-elevated': 'var(--color-bg-elevated)',
        'bg-card': 'var(--color-bg-card)',
        cream: 'var(--color-cream)',
        'cream-muted': 'var(--color-cream-muted)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
        burgundy: 'var(--color-burgundy)',
        'burgundy-deep': 'var(--color-burgundy-deep)',
        accent: 'var(--color-accent)',
        'on-accent': 'var(--color-on-accent)',
        'on-dark': 'var(--color-on-dark)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'full': '9999px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
