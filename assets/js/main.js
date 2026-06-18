/* ── NAVBAR SCROLL SHADOW ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── SCROLL REVEAL + SKILL BAR ANIMATION ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when their section becomes visible
      const bars = entry.target.querySelectorAll('.skill-fill');
      bars.forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });

// Initialise all reveal elements — reset skill bars to 0 first
document.querySelectorAll('.reveal').forEach(el => {
  el.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = '0';
  });
  observer.observe(el);
});

/* ── SMOOTH SCROLL FOR NAV LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
