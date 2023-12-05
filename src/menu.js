import "./style.css";

const content = document.getElementById("content");

const menuPage = document.createElement("div");
menuPage.classList.add(
  "bg-cover",
  "bg-center",
  "bg-pizza-img",
  "w-full",
  "h-full",
  "flex",
  "flex-col",
  "justify-center",
  "hidden",
  "menuPage",
  "relative"
);
menuPage.style.display = "none";

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
<p class="text-4xl font-bold font-playfair">Menu</p>
<hr class="w-48 h-1 bg-gray-100 border-0 rounded mt-5 dark:bg-gray-700">
<p class="text-2xl font-bold mt-5 font-ephesis">Pizza Neapolitan</p>
<p class="text-gray-400 text-xl mt-2 font-playfair">raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil</p>
<hr class="w-48 h-1 bg-gray-100 border-0 rounded mt-5 dark:bg-gray-700">
<p class="text-2xl font-bold mt-5 font-ephesis">Pizza Margherita</p>
<p class="text-gray-400 text-xl mt-2 font-playfair">tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt</p>
<hr class="w-48 h-1 bg-gray-100 border-0 rounded mt-5 dark:bg-gray-700">
<p class="text-2xl font-bold mt-5 font-ephesis">Pizza Marinara</p>
<p class="text-gray-400 text-xl mt-2 font-playfair">tomato sauce, thinly sliced garlic, and oregano</p>
<hr class="w-48 h-1 bg-gray-100 border-0 rounded mt-5 dark:bg-gray-700">
<p class="text-2xl font-bold mt-5 font-ephesis">Pizza Capricciosa</p>
<p class="text-gray-400 text-xl mt-2 font-playfair">tomato puree, mozzarella, cremini mushrooms, artichoke hearts, black olives, and prosciutto cotto</p>
<hr class="w-48 h-1 bg-gray-100 border-0 rounded mt-5 dark:bg-gray-700">
`;

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-black opacity-80 fixed bottom-0 w-full">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves
</p>
<a href="https://github.com/StefanYves" class="ml-3 w-8 h-8 bg-github-img bg-cover">
</div>`;

content.appendChild(menuPage);
infoDiv.appendChild(bgDiv);
menuPage.appendChild(infoDiv);
menuPage.appendChild(footer);
content.appendChild(menuPage);

export function showMenuPage() {
  menuPage.style.display = "initial";
}

export function hideMenuPage() {
  menuPage.style.display = "none";
}
