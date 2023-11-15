window.onscroll = function() {
  showScrollUpButton();
};

function showScrollUpButton() {
  const button = document.querySelector('.scrollup');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

const button = document.querySelector('.scrollup');
button.addEventListener('click', scrollToTop);



