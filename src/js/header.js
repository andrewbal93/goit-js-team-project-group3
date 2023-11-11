// Theme switcher
document.addEventListener('DOMContentLoaded', (event) => {
  
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


