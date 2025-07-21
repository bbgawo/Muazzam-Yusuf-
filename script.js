// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggleBtn.textContent = isDark ? '🌙' : '☀️';
});

// Set Current Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for your message, ' + e.target.name.value + '!');
  e.target.reset();
});