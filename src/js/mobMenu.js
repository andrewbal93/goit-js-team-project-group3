
localStorage.setItem('mobileMenuOpenOrNot', false);

window.openMobileWindow = openMobileWindow;
const openMobileMenuButton = document.querySelector('.mobileMenu')  


function openMobileWindow() {
  
  if (localStorage.getItem('mobileMenuOpenOrNot') === "false") {
    openMobileMenuButton.classList.add('openMobileMenu');
    document.body.style.overflow = 'hidden';
    localStorage.setItem('mobileMenuOpenOrNot', "true");
  }
  else {
    openMobileMenuButton.classList.remove('openMobileMenu');
    document.body.style.overflow = '';
    localStorage.setItem('mobileMenuOpenOrNot', "false");
  }

}