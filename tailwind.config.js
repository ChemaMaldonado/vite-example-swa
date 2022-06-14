module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      body: ['Quicksand', 'sans-serif'],
      header: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      colors: {
        dark: '#2C3F52',
        light: '#28A6D7',
        complementary: '#8EB60F'
      },
      screens: {
        tablet: '898px'
      }
    }
  },
  plugins: []
}
