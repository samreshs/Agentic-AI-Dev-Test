
// ── Newsletter form ───────────────────

const form = document.getElementById('newsletter-form');
const message = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (!email) {
      message.textContent = 'Please enter your email.';
      message.className = 'form-message error';
      return;
    }

    // Simulate submission
    message.textContent = 'Thanks! You\'re on the list.';
    message.className = 'form-message success';
    form.reset();

    setTimeout(() => {
      message.textContent = '';
      message.className = 'form-message';
    }, 4000);
  });
}

// ── Reveal on scroll ──────────────────

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.flavour-card, .feature').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
