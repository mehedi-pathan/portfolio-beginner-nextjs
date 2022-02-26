module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script'],
    },
    boxShadow: {
      'custom-light': "0 0 20px #313131",
      'custom-dark': "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c"
    },
    extend: {
      boxShadow: ['Dark']
    },
  },
  plugins: [],
}
