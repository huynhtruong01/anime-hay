const dir = "./src"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `${dir}/components/**/*.{js,vue,ts}`,
    `${dir}/layouts/**/*.vue`,
    `${dir}/pages/**/*.vue`,
    `${dir}/plugins/**/*.{js,ts}`,
    `${dir}/app.vue`,
    `${dir}/error.vue`,
  ],
  theme: {
    extend: {},
    screens: {
      xs: "0",
      sm: "321px",
      md: "376px",
      lg: "426px",
      xl: "769px",
      "2xl": "1025px",
      "3xl": "1441px",
    },
  },
  plugins: [],
}
