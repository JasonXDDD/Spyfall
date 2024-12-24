const plugin = require("tailwindcss/plugin");

export default {
  darkMode: "class",

  theme: {
    screens: {
      xs: "600px",
      sm: "900px",
      md: "1190px",
      lg: "1441px",
      xl: "1790px",
      "2xl": "2160px",
      "3xl": "2560px",
      "4xl": "3840px",
    },

    extend: {
      gridTemplateColumns: {
        7: "repeat(7,minmax(0,1fr))",
        8: "repeat(8,minmax(0,1fr))",
        9: "repeat(9,minmax(0,1fr))",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg) rotateZ(15deg)" },
          "100%": { transform: "rotateY(360deg) rotateZ(15deg)" },
        },
        flipBack: {
          "0%": { transform: "rotateY(-90deg) rotateZ(-15deg)" },
          "25%": { transform: "rotateY(-90deg) rotateZ(-15deg)" },
          "75%": { transform: "rotateY(90deg) rotateZ(-15deg)" },
          "100%": { transform: "rotateY(90deg) rotateZ(-15deg)" },
        },
      },
      animation: {
        flip: "flip 5s linear infinite",
        flipBack: "flipBack 5s linear infinite",
      },
      aspectRatio: {
        card: "635 / 889",
        cover: "4 / 3",
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      borderRadius: {
        card: "clamp(0.889rem,8.89%,3.556rem)/clamp(0.635rem,6.35%,2.54rem)",
      },
      colors: {
        base: "#121212",
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
