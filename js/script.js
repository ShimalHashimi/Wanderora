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
