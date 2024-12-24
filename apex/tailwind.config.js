import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {}
  },

  plugins: [typography, forms, containerQueries , require('flowbite/plugin')]
};
