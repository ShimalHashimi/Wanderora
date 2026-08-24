import { feedbackData } from "../data/feedbackData.js";

const storyContainer = document.getElementById("storyCardContainer");

function storyRenderCard(item) {
  return `
    <div class="story-card">
      <div class="story-user">
        <img src="${item.img}" alt="${item.name}">
        <div class="user-details">
          <span class="username"><b>${item.name}</b></span><br>
          <span class="usertitle">${item.title}</span>
        </div>
      </div>
      <div class="story-para">
        <p>${item.text}</p>
      </div>
    </div>
  `;
}

function renderStoryCards(source) {
  if (!storyContainer) {
    console.error("Feedback card container not found.");
    return;
  }

  storyContainer.innerHTML = source.map(storyRenderCard).join("");
}

renderStoryCards(feedbackData);

function storySlideRenderCard(item, index) {
  return `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <div class="story-card">
        <div class="story-user">
          <img src="${item.img}" alt="${item.name}">
          <div class="user-details">
            <span class="username"><b>${item.name}</b></span><br>
            <span class="usertitle">${item.title}</span>
          </div>
        </div>
        <div class="story-para">
          <p>${item.text}</p>
        </div>
      </div>
    </div>
  `;
}

function storyIndicatorRender(index) {
  return `
    <button type="button" data-bs-target="#carouselExampleDark" 
      data-bs-slide-to="${index}" 
      class="${index === 0 ? 'active' : ''}" 
      ${index === 0 ? 'aria-current="true"' : ''} 
      aria-label="Slide ${index + 1}"></button>
  `;
}

function renderStoryCarousel() {
  const inner = document.getElementById('storyCarouselInner');
  const indicators = document.getElementById('storyIndicators');

  inner.innerHTML = feedbackData.map((item, i) => storySlideRenderCard(item, i)).join('');
  indicators.innerHTML = feedbackData.map((item, i) => storyIndicatorRender(i)).join('');
}

renderStoryCarousel();

// optional: auto-slide every 3s to match your earlier requirement
const storyCarouselEl = document.getElementById('carouselExampleDark');
const storyCarousel = new bootstrap.Carousel(storyCarouselEl, {
  interval: 3000,
  ride: 'carousel'
});