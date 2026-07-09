// Accordion functionality
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(btn => {
btn.addEventListener('click', () => {
const parent = btn.parentElement;
parent.classList.toggle('active');
});
});

// Timeline animation
const items = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add('visible');
});
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));
