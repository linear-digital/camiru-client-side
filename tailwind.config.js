
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#239bd6',
        'secondary': '#F8AD47',
        'accent': '#98C931',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});