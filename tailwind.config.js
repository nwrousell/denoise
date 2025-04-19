/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        'search-border': 'var(--color-search-border)',
        'seed-border': 'var(--color-seed-border)'
      },
    },
  },
  plugins: [],
}
