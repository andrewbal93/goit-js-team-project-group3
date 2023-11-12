const openModalBtn = document.getElementById('openModalBtn');
const modal = document.querySelector('.author-win');
const signUpBtn = document.querySelector('.toggle-btn-up');
const signInBtn = document.querySelector('.toggle-btn-in');
const closeModalBtn = document.querySelector('.btn-close');
const submitBtn = document.querySelector('.submit');

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-hidden');
  signUpBtn.classList.add('active');
  submitBtn.textContent = 'SIGN UP';
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('is-hidden');
  signUpBtn.classList.remove('active');
  signInBtn.classList.remove('active');
  submitBtn.textContent = 'SIGN UP';
});

signUpBtn.addEventListener('click', () => {
  signUpBtn.classList.add('active');
  signInBtn.classList.remove('active');
  submitBtn.textContent = 'SIGN UP';
});

signInBtn.addEventListener('click', () => {
  signInBtn.classList.add('active');
  signUpBtn.classList.remove('active');
  submitBtn.textContent = 'SIGN IN';
});