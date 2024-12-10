module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./themes/**/*.html"],
  theme: {
    extend: {
      colors: {
        "sient-blue": "#E6F5F6",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
