
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#15ACDE',
        'secondary': '#F8AD47',
        'accent': '#96C82C',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});