
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
        'secondary': '#96C82C',
        'accent': '#96C82C',
        'error': "#F8234F"
      }
    },
  },
  plugins: [
    // require('daisyui'),
  ],
});
