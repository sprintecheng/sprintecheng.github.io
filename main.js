// Nav: shadow once scrolled
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.08)' : '';
}, { passive: true });

// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function setMenu(open) {
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
}
navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Mark the current section in the nav
const links = [...navLinks.querySelectorAll('a[href^="#"]:not(.nav-cta)')];
const byId = id => links.find(a => a.getAttribute('href') === '#' + id);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(a => a.removeAttribute('aria-current'));
    const link = byId(entry.target.id);
    if (link) link.setAttribute('aria-current', 'true');
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
