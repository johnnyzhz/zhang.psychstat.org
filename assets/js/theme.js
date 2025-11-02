// Dark mode toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light' mode
let currentTheme = localStorage.getItem('darkMode');

// Set the initial theme
if (currentTheme === 'enabled') {
  htmlElement.setAttribute('data-theme', 'dark');
  if (themeToggle) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('darkMode', 'disabled');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'enabled');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
}
