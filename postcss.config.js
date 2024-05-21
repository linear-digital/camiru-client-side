export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'oklch-function': true, // Ensure oklch is supported
      },
    },
  },
}
