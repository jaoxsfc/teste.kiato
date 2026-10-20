const body = document.body;
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const menuLabel = toggle.querySelector('.sr-only');

const closeMenu = () => {
  body.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
  menuLabel.textContent = 'Abrir menu';
};

toggle.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
