module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        featuresBg: "url('/src/images/features-bg.png')",
      },
      fonts: {
        sans: "Open Sans, Roboto Serif , sans-serif",
      },

      width: {
        100: "400px",
        60: "242px",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        38: "152px",
        90: '360px'
      },

      colors: {
        sliderFilter: "#5C3EBB",
        lightGray: "#697488",
        darkGray: "#838287",
        lightPrimary: "rgb(93, 62, 188)",
        extraLightPrimary: "#f4f2fd",
        paleWhite: "#f3f3f3",
        grayDark: "#273444",
        gray: "#8492a6",
        grayLight: "#d3dce6",
        paleBlack: "#191919",
        brandYellow: "#ffd300",
        darkerGray: "#3e3e3e",
        primaryViolet: "#4c3398",
        lightViolet: "#5d3ebc",
        paleBackground: "#FAFAFA",
        primaryTextColor: "#191919",
        secondaryTextColor: "#697488",
      },
    },

    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1268px" },

      lg: { max: "1168px" },

      md: { max: "968px" },

      sm: { max: "768px" },

      xsm: { max: "568px" },

      xxsm: { max: "468px" },
    },

    borderRadius: {
      borderS: "0.25rem",
      borderM: "0.5rem",
      borderL: "1rem",
    },
  },
  plugins: [],
};
