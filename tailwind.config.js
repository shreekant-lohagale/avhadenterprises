// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // Example paths for common frameworks
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#F8FAFC', // Frost White (was midnight)
          surface: '#F1F5F9', // Section Background (Soft Sky)
          primary: '#2563EB', // Royal Blue
          secondary: '#7C3AED', // Soft Violet
          accent: '#38BDF8', // Sky Cyan
          success: '#10B981', // Emerald
          text: {
            primary: '#0F172A', // Slate Dark
            secondary: '#475569', // Slate Gray
          }
        }
      }
    },
  },
  plugins: [],
}