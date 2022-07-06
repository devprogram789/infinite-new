module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "R-FLEX": ["R-FLEX", "sans-serif"],
      "Prompt": ["Prompt", "sans-serif"],
    },
    screens: {
      tablet: {'min': '1920px'},
      laptop: {'min': '1536px'},
      xllaptop: {'min': '1280px'},
      desktop: {'min': '1024px'},
      xldesktop: {'min': '768px'},
      mobile: {'min': '640px'},
    },
    colors: {
      white: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      infinite1: {
        100: "#F5FAFD",
        200: "#EBEEF3",
        250: "#E2E3E8",
        300: "#c4c8ca",
        400: "#abafb1",
        500: "#939697",
        600: "#7a7d7e",
        700: "#626465",
        800: "#494b4b",
        900: "#313232",
      },
      infinite2: {
        1: "#F5FAFD",
        2: "#5FC6BA",
        3: "#7EB9C5",
        4: "#DCF2EF",
      },
      infinite3: "#3F4566",
      "in-purple": {
        1: "#4459A3",
        2: "#9DA6CD",
        3: "#0F1840",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        680: "680px",
        750: "750px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
