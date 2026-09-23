/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./aviso-legal.html",
    "./politicas.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#84c0bf',
          hover: '#6eb3b2',
          light: '#eaf4f4',
          dark: '#5ba2a1',
        },
        'text-main': '#2f3436',
        'text-muted': '#4d5658',
        'bg-main': '#ffffff',
        'bg-alt': '#f8fafb',
        'bg-card': '#ffffff',
        'bg-dark': '#232729',
        'border-main': '#e3e8e9',
        'border-focus': '#84c0bf',
      },
      spacing: {
        'section-mob': '80px',
        'section-desk': '120px',
      },
      fontFamily: {
        sans: ['"Sora"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(47, 52, 54, 0.06)',
        'card': '0 10px 30px -4px rgba(47, 52, 54, 0.08)',
        'elevated': '0 20px 40px -10px rgba(47, 52, 54, 0.12)',
      },
      borderRadius: {
        'card': '1rem',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
