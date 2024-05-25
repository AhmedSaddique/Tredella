/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      colors:{
        primary: "#b30015 ",
        primary2: "#ff1a34",
        secondary:"#FFFCF5",
        dark:"#3A393C",
        light:"#C7C5C2"
    },
      backgroundImage: {
        'teamCircle' :"url('/images/teamCircle.png')",
        'about':"url('/images/1.jpg')",
      },
    },
  },
  plugins: [],
};
