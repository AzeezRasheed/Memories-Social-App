module.exports = {
  // You are missing this block that defines what files tailwind should scan for usage

  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  extend: {
    gridTemplateColumns: {
      "homeGrid": "18rem auto 18rem",
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
