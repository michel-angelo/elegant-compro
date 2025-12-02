/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Font Judul Mewah
        sans: ['"Lato"', 'sans-serif'],        // Font Body Bersih
      },
      colors: {
        'luxury-black': '#1a1a1a',
        'luxury-gold': '#D4AF37', // Warna Emas dikit
        'soft-gray': '#F9F9F9',
      },
    },
  },
  plugins: [],
};