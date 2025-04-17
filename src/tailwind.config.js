module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Убедитесь, что это соответствует вашему проекту
   ],
   corePlugins: {
      preflight: false, // 🚫 disables Tailwind's global resets
   },
   theme: {
      extend: {},
   },
   plugins: [],
};
