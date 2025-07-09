// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const logo = document.getElementById('logo');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Switch logo based on theme
  logo.src = isDark ? 'images/logo-dark.png' : 'images/New_Zelda_Informer_Logo.png';
});

// On page load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});