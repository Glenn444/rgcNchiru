/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
          './public/*.{html,js}'],
  theme: {
    extend: {
      height:{
        '128':'26.5rem',
        '129':'33rem',
      },
      colors:{
        'glen':'#749BC2',
        'royal-blue':'#04009A',
      },
      padding:{
        '120':'40rem',
      },
      keyframes:{
        'open-menu':{
          '0%':{ transform: 'scaleY(0)'},
          '80%':{ transform: 'scaleY(1.2)'},
          '100%':{ transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

