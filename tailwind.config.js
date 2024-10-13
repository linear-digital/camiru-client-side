
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
        'primary2': '#187A82',
        'secondary': '#96C82C',
        'accent': '#96C82C',
        'accent2': '#F8AD47',
        'error': "#F8234F",
        'staff-pc': "#F8AD47",
        'staff-bg': "#fff8f9"
      }
    },
  },
  plugins: [
    // require('daisyui'),
  ],
});
