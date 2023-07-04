module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#1C262F",
        gray: {
          100: "#E8E8E8",
          500: "#CECECE",
          700: "#7E7E7E",
          900: "#707070",
          dark: "#4A5A63",
          default: "#E8E8E8"
        },
        blue: {
          soft: '#D1ECFF',
          light: "#3F7EA7",
          default: '#0A82D5',
          dark: '#3B7193'
        },
        red: {
          light: '#FFD5D5',
          default: '#D93535',
          dark: '#BF1010'
        },
        green: {
          100: '#C6D9AE',
          light: '#ABD2B6',
          default: '#3DBB61',

        },
        lime: {
          default: '#2ACF59',
          light: '#82A159',
        },
        orange: {
          100: '#FED788',
          900: '#805124',
          soft: '#FFDFC7',
          light: '#FFEBB5',
          default: '#FCBB0A',
          dark: '#E86501',
        },
        purple: {
          light: '#D7C5FF',
          default: '#8C57FF',
        },
        earth: {
          light: '#DBCDC1',
          default: '#9F6D3F',
        }
      },
      spacing: {
        '68': '17rem',
      },
      fontFamily: {
        'serif': ['Neuton', 'system-ui'],
        'sans': ['Roboto', 'system-ui'],
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      opacity: ['disabled'],
      width: ["responsive", "hover", "focus"]
    },
  },
  plugins: [],
}