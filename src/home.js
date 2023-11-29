import "./style.css";

const content = document.getElementById("content");

const coverDiv = document.createElement("div");
coverDiv.classList.add(
  "bg-cover",
  "bg-center",
  "bg-pizza-img",
  "w-full",
  "h-full",
  "flex",
  "flex-col",
  "justify-center"
);

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
  coverDiv.style.display = "none";
  console.log(coverDiv.classList);
});

const infoDiv = document.createElement("div");
infoDiv.classList.add("flex", "items-center", "justify-center", "h-full");
const bgDiv = document.createElement("div");
bgDiv.classList.add(
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "bg-black",
  "bg-opacity-80",
  "text-white",
  "p-12"
);
bgDiv.innerHTML = `
<p class="text-2xl font-bold">Best Pizza in the World</p>
<p class="text-2xl font-bold mt-5">Since 1936</p>
<div
  class="bg-chef-img h-72 w-72 rounded-full mt-5 overflow-hidden bg-cover bg-center"
></div>
<p class="text-2xl font-bold mt-5">
  Order online or visit our restaurant!
</p>`;

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-black opacity-80">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves
</p>
<span class="bg-github-img bg-cover ml-3 w-8 h-8"></span>
</div>`;

content.appendChild(coverDiv);
coverDiv.appendChild(navDiv);
navDiv.appendChild(btnDiv);
infoDiv.appendChild(bgDiv);
coverDiv.appendChild(infoDiv);
coverDiv.appendChild(footer);

export default coverDiv;
