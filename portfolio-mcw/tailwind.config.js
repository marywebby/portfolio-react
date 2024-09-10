// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'starry-sky': 'linear-gradient(to right, black, rgb(12, 12, 81) 100%)',
      },
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles if you need complete control
  },
  plugins: [],
}




