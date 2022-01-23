let tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import')(),
    tailwindcss('./libs/ui/tailwind.config.js'),
    require('autoprefixer'),
  ],
}
