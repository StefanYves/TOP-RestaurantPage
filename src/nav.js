import "./style.css";
import menuPage from "./menu";
import homePage from "./home";

const navDiv = document.createElement("div");
navDiv.classList.add(
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "bg-black",
  "bg-opacity-80",
  "text-white",
  "p-10"
);

const btnDiv = document.createElement("div");
btnDiv.classList.add("flex", "mt-5");
const homeBtn = document.createElement("button");
homeBtn.classList.add("home", "mr-5");
homeBtn.innerText = "Home";
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu", "mr-5", "ml-5");
menuBtn.innerText = "Menu";
const contactBtn = document.createElement("button");
contactBtn.classList.add("contact", "ml-5");
contactBtn.innerText = "Contact";
btnDiv.appendChild(homeBtn);
btnDiv.appendChild(menuBtn);
btnDiv.appendChild(contactBtn);

navDiv.innerHTML = `
<p class="text-3xl">Best Pizzeria</p>
`;

menuBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  menuPage.style.display = "initial";
  console.log(menuPage.style.display);
});

navDiv.appendChild(btnDiv);

export default navDiv;
