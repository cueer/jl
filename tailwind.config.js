/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1a1a2e',
        'bg-sidebar': '#16213e',
        'accent': '#e94560',
        'text-primary': '#e0e0e0',
        'text-muted': '#8892b0',
        'bg-card': '#233554',
        'border-custom': '#2a2a4a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Source Code Pro"', 'monospace']
      }
    }
  },
  plugins: []
}
