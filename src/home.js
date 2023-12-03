import "./style.css";
import navDiv from "./nav";

const content = document.getElementById("content");

const homePage = document.createElement("div");
homePage.classList.add(
  "bg-cover",
  "bg-center",
  "bg-pizza-img",
  "w-full",
  "h-full",
  "flex",
  "flex-col",
  "justify-center",
  "homePage"
);

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

content.appendChild(homePage);
homePage.appendChild(navDiv);
infoDiv.appendChild(bgDiv);
homePage.appendChild(infoDiv);
homePage.appendChild(footer);

export default homePage;
