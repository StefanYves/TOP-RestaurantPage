import "./style.css";

const content = document.getElementById("content");

const contactPage = document.createElement("div");
contactPage.classList.add(
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
contactPage.style.display = "none";

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
<div class="flex flex-row justify-center items-center">
<div class="ml-3 w-8 h-8 bg-phone bg-cover"></div>
<p class="ml-5">248-568-1968</p>
</div>
<div class="flex flex-row justify-center items-center">
<div class="ml-3 w-8 h-8 mt-5 mb-5 bg-location bg-cover"></div>
<p class="mt-2 ml-5">4308 Bartlett Avenue, Southfield, Michigan, USA</p>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47080.85543773997!2d-83.33814725110885!3d42.47978485283497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824b9e143a6b8b1%3A0xa3f2ec1e8a53b0c2!2sSouthfield%2C%20Michigan%2C%20Statele%20Unite%20ale%20Americii!5e0!3m2!1sro!2sro!4v1701649488568!5m2!1sro!2sro" 
width="500" 
height="350" 
style="border:0;" 
allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade"></iframe>
`;

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-black opacity-80 fixed bottom-0 w-full">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves
</p>
<a href="https://github.com/StefanYves" class="ml-3 w-8 h-8 bg-github-img bg-cover">
</div>`;

content.appendChild(contactPage);
infoDiv.appendChild(bgDiv);
contactPage.appendChild(infoDiv);
contactPage.appendChild(footer);
content.appendChild(contactPage);

export function showContactPage() {
  contactPage.style.display = "initial";
}

export function hideContactPage() {
  contactPage.style.display = "none";
}
