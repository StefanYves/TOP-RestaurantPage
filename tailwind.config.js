module.exports = {
  content: ["./dist/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "pizza-img": "url('/src/images/pizza.jpg')",
        "chef-img": "url('/src/images/chef.png')",
        "github-img": "url('/src/images/github.png')",
        phone: "url('/src/images/phone.png')",
        location: "url('/src/images/location.png')",
      },
    },
    fontFamily: {
      ephesis: ["Ephesis", "cursive"],
      playfair: ["Playfair Display", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
