const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  presets: [require("shared/ui/tailwind.preset")],
  theme: {
    fontFamily: {
      heading: ["Roboto Condensed", defaultTheme.fontFamily.sans],
      base: ["Roboto", defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        primary: colors.emerald,
      },
      transitionProperty: {
        filter: "filter",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
      backgroundOpacity: ["even"],
    },
  },
};
