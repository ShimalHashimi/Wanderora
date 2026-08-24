import { destData } from "../data/destinationData.js";

const destContainer = document.getElementById("DestCardContainer");


function destRenderCard(item) {
  return `
    <div class="dest-card">
      <img src="${item.image}" alt="${item.title}">
      
      <h3>${item.title}</h3>
      
      <p>${item.desc}</p>
      
      <a href="${item.link}" target="_blank">
        View Details
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  `;
}


function loadDestCards(source) {
  if (!destContainer) {
    console.error("Destination card container not found.");
    return;
  }

  destContainer.innerHTML = "";

  source.forEach(item => {
    destContainer.innerHTML += destRenderCard(item);
  });
}

let limit;

if (window.innerWidth <= 1522) {
  limit = 8;
}else {
  limit = 10;
}

loadDestCards(destData.slice(0, limit));