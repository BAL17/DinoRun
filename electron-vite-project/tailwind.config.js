module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Cabin, sans-serif",
        body: "Ubuntu, sans-serif",
      },
      colors: {
        // text: "#f8f2e9",
        // background: "#080602",
        // primary: "#e2c49c",
        // secondary: "#266081",
        // accent: "#6a42c7",
        text: "#f3f4f1",
        background: "#080907",
        primary: "#bfc5b5",
        secondary: "#4d5f63",
        accent: "#878ba1",
      },
      screens: {
        xs: "380px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
