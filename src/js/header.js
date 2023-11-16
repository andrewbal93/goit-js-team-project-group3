// Theme switcher
document.addEventListener('DOMContentLoaded', event => {
  // change the theme
  const toggleSwitch = document.getElementById('theme-toggle');
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.documentElement.classList.add('dark-theme');
      
    } else {
      document.documentElement.classList.remove('dark-theme');

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

document.addEventListener('DOMContentLoaded', event => {
  const toggleSwitch = document.getElementById('theme-toggle');
  const themeToggleLabel = document.getElementById('theme-toggle-label');

  // Відновлення стану перемикача та теми
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.documentElement.classList.add('dark-theme');
    toggleSwitch.checked = true;
    themeToggleLabel.classList.remove('light-theme');
    themeToggleLabel.classList.add('dark-theme');
  }

  // Зміна теми
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.body.classList.add('dark-theme');
      document.documentElement.classList.add('dark-theme');
      themeToggleLabel.classList.remove('light-theme');
      themeToggleLabel.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.classList.remove('dark-theme');
      themeToggleLabel.classList.remove('dark-theme');
      themeToggleLabel.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});




// Підсвітка поточної сторінки в навігації
function highlightActiveNavLink() {
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.nav-list li a');
  var home_button = document.querySelector('.home'); 
  var sh_list_button = document.querySelector('.shopping-list'); 
  navLinks.forEach(function (link) {
    home_button.classList.remove('nav-bar-active');
    sh_list_button.classList.remove('nav-bar-active');

    if (`/goit-js-team-project-group3/shoping-list.html` === `${currentPath}`) { 
      sh_list_button.classList.add('nav-bar-active');
      home_button.classList.remove('nav-bar-active');
    }
    else {
      link.parentNode.classList.remove('nav-bar-active');
      home_button.classList.add('nav-bar-active');
    }
  });
}

window.addEventListener('DOMContentLoaded', highlightActiveNavLink)