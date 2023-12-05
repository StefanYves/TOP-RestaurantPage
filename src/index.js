import "./style.css";

import { hideHomePage, showHomePage } from "./home";
import { hideMenuPage, showMenuPage } from "./menu";
import { hideContactPage, showContactPage } from "./contact";

const content = document.getElementById("content");

const navDiv = document.createElement("div");
navDiv.classList.add(
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "fixed",
  "top-0",
  "w-full",
  "bg-black",
  "bg-opacity-80",
  "text-white",
  "p-5"
);

navDiv.innerHTML = `
<p class="text-6xl font-ephesis">Best Pizzeria</p>
`;

const btnDiv = document.createElement("div");
btnDiv.classList.add("flex", "mt-5");
const homeBtn = document.createElement("button");
homeBtn.classList.add("home", "mr-5");
homeBtn.innerHTML = `
<p class="font-playfair text-lg">Home</p>
`;
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu", "mr-5", "ml-5");
menuBtn.innerHTML = `
<p class="font-playfair text-lg">Menu</p>
`;
const contactBtn = document.createElement("button");
contactBtn.classList.add("contact", "ml-5");
contactBtn.innerHTML = `
<p class="font-playfair text-lg">Contact</p>
`;
btnDiv.appendChild(homeBtn);
btnDiv.appendChild(menuBtn);
btnDiv.appendChild(contactBtn);

homeBtn.addEventListener("click", () => {
  console.log("Function starting!");
  showHomePage();
  hideMenuPage();
  hideContactPage();
  console.log("Function ending!");
});

menuBtn.addEventListener("click", () => {
  console.log("Function starting!");
  hideHomePage();
  hideContactPage();
  showMenuPage();
  console.log("Function ending!");
});

contactBtn.addEventListener("click", () => {
  console.log("Function starting!");
  hideHomePage();
  hideMenuPage();
  showContactPage();
  console.log("Function ending!");
});

navDiv.appendChild(btnDiv);
content.appendChild(navDiv);
