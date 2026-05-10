/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'umo-purple': '#622ed1',
        'umo-yellow': '#ecc92f',
        'umo-teal':   '#34b7ad',
        'umo-dark':   '#321b45',
        'umo-light':  '#d5b3fd',
        'umo-soft':   '#f3ebff',
        'umo-bg':     '#ffffff',
        // Garder les anciens pour compatibilité
        'odas-blue':   '#622ed1',
        'odas-dark':   '#321b45',
        'odas-light':  '#9963db',
        'odas-teal':   '#34b7ad',
        'odas-green':  '#34b7ad',
        'odas-yellow': '#ecc92f',
        'odas-bg':     '#f9f6ff',
        'odas-soft':   '#f3ebff',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body':    ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
