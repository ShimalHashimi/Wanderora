/* ----- Navbar scroll effect ----- */
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('main-navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ----- Side nav open/close ----- */
function getNavbarBottom() {
    const navbar = document.getElementById('main-navbar');
     return navbar.getBoundingClientRect().bottom + 8; // 8px gap below navbar
}

function showsidenav() {
    const nav = document.getElementById('side-navbar');
    nav.style.top = getNavbarBottom() + 'px';
    document.querySelector('.nav-menu').classList.add('hide');
    document.querySelector('.nav-close').classList.add('show');
}

function hidesidenav() {
    const nav = document.getElementById('side-navbar');
    nav.style.top = '-300px';
    document.querySelector('.nav-menu').classList.remove('hide');
    document.querySelector('.nav-close').classList.remove('show');
}

/* Close side nav when clicking outside */
document.addEventListener('click', function (e) {
    const nav = document.getElementById('side-navbar');
    const toggle = document.querySelector('.navbar-toggle');
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        hidesidenav();
    }
});




/* ============================
            DESTINATION CARDS SECTION
                    ============================*/
const destData = [
  {
    image: "Images/Places/ImageWithFallback1.png",
    title: "Sigiriya",
    desc: "Ancient rock fortress",
    link: "https://example.com/mirissa"
  },
  {
    image: "Images/Places/ImageWithFallback2.png",
    title: "Ella",
    desc: "Misty hills with scenic views",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback3.png",
    title: "Mirissa",
    desc: "Beach & Whale Watching",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback4.png",
    title: "Kandy",
    desc: "Culture & Temple of the Tooth",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback5.png",
    title: "Yala",
    desc: "Wildlife & Safari Adventures",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback6.png",
    title: "Galle",
    desc: "Colonial Fort & Coastal Charm",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback7.jpg",
    title: "Adam's peak",
    desc: "Holy mountain with sunrise view",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback8.jpg",
    title: "Pigeon Island",
    desc: "Coral reef snorkeling island",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback9.jpg",
    title: "Arugam Bay",
    desc: "Top surfing beach in Sri Lanka",
    link: "https://example.com/mirissa"
  },{
    image: "Images/Places/ImageWithFallback10.jpg",
    title: "Hulangala",
    desc: "Scenic sunset hilltop camping",
    link: "https://example.com/mirissa"
  },
];

const destContainer = document.getElementById("DestCardContainer");

function destRenderCard(item) {
  return `
    <div class="dest-card">
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank">View Details <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `;
}

function loadDestCards(source) {
  destContainer.innerHTML = ""; // clear first

  source.forEach(item => {
    destContainer.innerHTML += destRenderCard(item);
  });
}

let limit;

if (window.innerWidth <= 1522) {
  limit = 8;
} else {
  limit = 10;
}

loadDestCards(destData.slice(0, limit));

// fetch("/api/cards")
//   .then(res => res.json())
//   .then(data => loadCards(data));
