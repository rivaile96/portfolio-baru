/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Di dalam object 'colors', tambahkan 'primary-dark'
      colors: {
        'background': '#0D0C1D',
        'primary': '#16152D', // Warna primer lu yang sekarang
        'primary-dark': '#100F21', // <-- TAMBAHKAN INI (Versi lebih gelap dari primary)
        'accent': {
          DEFAULT: '#6C63FF',
          'hover': '#574EFA',
        },
        'text-primary': '#F5F5F5',
        'text-secondary': '#A9A9A9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
