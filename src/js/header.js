// Theme switcher
document.addEventListener('DOMContentLoaded', event => {
  // change the theme
  const toggleSwitch = document.getElementById('theme-toggle');
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });

  // change the color of the switch
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleLabel = document.getElementById('theme-toggle-label');
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      themeToggleLabel.classList.remove('light-theme');
      themeToggleLabel.classList.add('dark-theme');
    } else {
      themeToggleLabel.classList.remove('dark-theme');
      themeToggleLabel.classList.add('light-theme');
    }
  });

});



// Підсвітка поточної сторінки в навігації
function highlightActiveNavLink() {
  var currentPath = window.location.pathname;

  var navLinks = document.querySelectorAll('.nav-list li a');

  navLinks.forEach(function(link) {
    link.parentNode.classList.remove('nav-bar-active');

    if (link.getAttribute('href') === `..${currentPath}` || link.getAttribute('href') === `.${currentPath}` || link.getAttribute('href') === `${currentPath}`) {
      link.parentNode.classList.add('nav-bar-active');
    }
  });
}

window.addEventListener('DOMContentLoaded', highlightActiveNavLink)