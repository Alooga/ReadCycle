const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#14183E",
        secondary: "#165058",
        action: {
          default: "#165058",
          hover: "#165058",
          active: "#165058",
        },
        background: {
          light: "#E3F6F8",
        },
        text: {
          primary: "#14183E",
          secondary: "#1B626D",
          muted: "#718096",
        },
        additional: {
          red: "#CD240D",
          yellow: "#EDC22E",
          purple: "#9E2DD3",
        },
      },
      colors:{
        primary: "#14183E",
        secondary: '165058',
      },
      action: {
        default: '#165058', 
        hover: '#165058',   
        active: '#165058',  
      },
      background: {
        light: '#E3F6F8', 
      },
      text: {
        primary: '#14183E', 
        secondary: '#1B626D', 
        muted: '#718096', 
      },
      additional: {
        red: '#CD240D',    
        yellow: '#EDC22E', 
        purple: '#9E2DD3',   
       
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
