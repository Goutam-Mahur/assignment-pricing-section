module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1',             // --primary-color
        'secondary': '#a5b4fc',           // --secondary-color
        'background': '#0f172a',          // --background-color
        'text': '#e2e8f0',                // --text-color
        'accent': '#22d3ee',              // --accent-color
        'code-background': '#1e293b',     // --code-background
        'section-background': '#1e293b',  // --section-background
        'border': '#334155',              // --border-color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  darkMode: 'class', // This ensures that dark mode is triggered by adding a 'dark' class
  plugins: [],
};
