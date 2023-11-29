module.exports = {
  content: ["./dist/*.html"],
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
