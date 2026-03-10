/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* TayGaff brand - use via global.css vars or these names */
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
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'full': 'var(--radius-full)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        'bounce-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'bounce-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'bounce-down': 'bounce-down 2s infinite',
        'bounce-up': 'bounce-up 2s infinite',
      },
    },
  },
  plugins: [],
}
