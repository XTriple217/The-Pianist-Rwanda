const topbar = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.main-nav a');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && topbar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (topbar && menuToggle && topbar.classList.contains('menu-open')) {
      topbar.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
    }
  });
});
