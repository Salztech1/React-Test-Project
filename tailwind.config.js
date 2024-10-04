module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure it matches your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        
         'secondary-bg-200': '#ffd37d',
        // 'image-bg-300': '#d9e4ed',
        // 'dark-bg-400': '#131415',
        'card-bg-100': '#1f2124',
        'social-bg-200': '#232323',
        'green-bg-300': '#32e244',
        'icon-bg-400':'#282a2d',
       

      }
    },
  },
  plugins: [],
};

