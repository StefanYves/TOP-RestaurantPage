module.exports = {
  content: [
    "./dist/*.html",
    "./src/**/*.js", // Include all JavaScript files in src directory and subdirectories
    // Add other JavaScript files or directories as needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pizza-img": "url('/src/images/pizza.jpg')",
        "chef-img": "url('/src/images/chef.png')",
        "github-img": "url('/src/images/github.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
