/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#baddff',
          300: '#84c5ff',
          400: '#48a7ff',
          500: '#1a88ff',
          600: '#0066ff',
          700: '#0052db',
          800: '#0042b0',
          900: '#003a8c',
        },
        accent: {
          50: '#fff2f0',
          100: '#ffe4de',
          200: '#ffc5b8',
          300: '#ff9c85',
          400: '#ff6547',
          500: '#ff3a15',
          600: '#ff1f00',
          700: '#db1a00',
          800: '#b01500',
          900: '#8c1100',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};