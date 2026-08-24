import { inspiredData } from "../data/inspiredData.js";

function inspiredRenderCard(item) {
  return `
    <div class="inspired-card inspired-${item.size}">
      <img src="${item.image}" alt="${item.caption}">
      <div class="inspired-overlay">
        <p>${item.caption}</p>
      </div>
    </div>
  `;
}

function renderInspiredCards() {
  const container = document.getElementById('InspiredCardContainer');
  container.innerHTML = inspiredData.map(inspiredRenderCard).join('');
}

renderInspiredCards();