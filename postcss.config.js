export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'oklab-function': true,
        'color-function': true,
        'lab-function': true,
      },
    },
  },
}
