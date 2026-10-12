export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#103B78',
          50: '#F0F5FC',
          700: '#0D3166',
          800: '#0B2A57',
          900: '#081F42',
        },
        gold: {
          DEFAULT: '#FFC928',
          100: '#FFF5D1',
          600: '#F2B705',
          ink: '#6B4E00',
        },
        sky: { DEFAULT: '#EAF3FF' },
        ink: '#18365E',
        mist: '#F7F9FC',
        peach: { DEFAULT: '#FFE9DA', ink: '#8A3F12' },
        mint: { DEFAULT: '#DDF3E7', ink: '#1C6542' },
        lilac: { DEFAULT: '#ECE8FF', ink: '#4B3A9E' },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,59,120,0.06), 0 6px 20px -8px rgba(16,59,120,0.12)',
        lift: '0 2px 4px rgba(16,59,120,0.06), 0 18px 40px -12px rgba(16,59,120,0.28)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
