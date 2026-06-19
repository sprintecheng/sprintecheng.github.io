// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.08)' : '';
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal
const reveals = document.querySelectorAll('.section-header, .about-card, .service-card, .machine-card, .cert-badge, .trusted-slot, .contact-item');
reveals.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#C8392B' : '';
  });
}, { passive: true });

// Spec modal
function openSpec(title, body) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent = body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSpec() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSpec(); });

// Contact form — opens mail client (no server needed for GitHub Pages)
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Enquiry from ${name}${company ? ' (' + company + ')' : ''}`);
  const body = encodeURIComponent(
    `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nRequirement:\n${message}`
  );
  window.location.href = `mailto:sprintecheng@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formMsg').textContent = 'Opening your email client…';
  setTimeout(() => { document.getElementById('formMsg').textContent = ''; }, 3000);
}
