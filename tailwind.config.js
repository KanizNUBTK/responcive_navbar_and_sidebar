module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // main: '#4e0057ee',
        // main2: '#4e0057',
        main: 'white',
        main2: 'white',
        light: '#F3F4F9',
      },
      spacing: {
        sidebar: 270,
        'sidebar-mini': 100,
      }
    },
  },
  plugins: [],
}