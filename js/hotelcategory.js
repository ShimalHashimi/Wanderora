import { hotelcategoryData } from "../data/hotelcategoryData.js";

function hotelRenderCard(item) {
  return `
    <div class="hotel-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="hotel-overlay">
        <i class="${item.icon}"></i>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
}

function renderHotelCategoryCards() {
  const container = document.getElementById('HotelCardContainer');
  container.innerHTML = hotelcategoryData.map(hotelRenderCard).join('');
}

renderHotelCategoryCards();