
localStorage.setItem('mobileMenuOpenOrNot', false);

window.openMobileWindow = openMobileWindow;
const openMobileMenuButton = document.querySelector('.mobileMenu')  
const iconBurger = document.querySelector('.icon-burger-menu');
const iconClose = document.querySelector('.icon-close');

function openMobileWindow() {
  
  if (localStorage.getItem('mobileMenuOpenOrNot') === "false") {
    openMobileMenuButton.classList.add('openMobileMenu');
    document.body.style.overflow = 'hidden';
    iconBurger.classList.add('iconHide');
    iconClose.classList.remove('iconHide');
    localStorage.setItem('mobileMenuOpenOrNot', "true");
  }
  else {
    openMobileMenuButton.classList.remove('openMobileMenu');
    document.body.style.overflow = '';
    iconBurger.classList.remove('iconHide');
    iconClose.classList.add('iconHide');
    localStorage.setItem('mobileMenuOpenOrNot', "false");
  }

}