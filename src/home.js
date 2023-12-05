import "./style.css";

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
  "homePage",
  "relative"
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
  "p-12",
  "overflow-hidden"
);
bgDiv.innerHTML = `
<p class="text-2xl font-bold font-playfair">Best Pizza in the World</p>
<p class="text-2xl font-bold mt-5 font-ephesis">Since 1936</p>
<div
  class="bg-chef-img h-72 w-72 rounded-full mt-5 overflow-hidden bg-cover bg-center"
></div>
<p class="text-2xl font-bold font-playfair mt-5">
  Order online or visit our restaurant!
</p>`;

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-black opacity-80 fixed bottom-0 w-full">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves
</p>
<a href="https://github.com/StefanYves" class="ml-3 w-8 h-8 bg-github-img bg-cover">
</a>
</div>`;

content.appendChild(homePage);
infoDiv.appendChild(bgDiv);
homePage.appendChild(infoDiv);
homePage.appendChild(footer);

export function showHomePage() {
  homePage.style.display = "initial";
}

export function hideHomePage() {
  homePage.style.display = "none";
}
