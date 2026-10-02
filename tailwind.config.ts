import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0F1B2D', soft: '#46546A', mute: '#7A8799' },
        paper: { DEFAULT: '#F2F4F8', card: '#FFFFFF', line: '#E1E6EE' },
        stage: { DEFAULT: '#4B3FE0', deep: '#2E2599', tint: '#ECEAFD' },
        spot: { DEFAULT: '#F2A516', tint: '#FEF3DB' },
        ok: { DEFAULT: '#12805C', tint: '#DDF3EA' },
        bad: { DEFAULT: '#C2382F', tint: '#FBE4E2' },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: { card: '14px' },
    },
  },
  plugins: [],
};
export default config;
