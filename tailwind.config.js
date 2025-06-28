/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Dynamic flex-grow classes
    'grow-[1]',
    'grow-[2]'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
