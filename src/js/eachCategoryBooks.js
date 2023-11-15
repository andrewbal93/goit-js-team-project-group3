import { fetchBooksBySelectedCategory } from './bookShelfApi';

const categoryListContainer = document.querySelector(
  '.category-list-container'
);

const bestSellersList = document.querySelector('.best-sellers-list');
const bestselllersTitle = document.querySelector('.bestselllersTitle');

categoryListContainer.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  const category = event.target.textContent.trim();
  fetchBooksBySelectedCategory(category)
    .then(resp => {
      updateBestSellersList(resp);
      updateTitle(resp[0].list_name);
    })
    .catch(error => {
      console.error('Error loading books:', error);
    });
}

function updateBestSellersList(books) {
  bestSellersList.innerHTML = '';
  books.forEach(book => {
    bestSellersList.innerHTML += createBookMarkup(book);
  });
  bestSellersList.classList.add('books-list');
}

function createBookMarkup({ title, author, book_image }) {
  return `<div class="book-category">
             <div class="books">
               <ul class="books-category-list">
                 <li>
                   <div class="book-category-card mobile-visible tablet-visible">
                     <img class='bookByCategory-img' src="${book_image}" alt="${title}" />
                     <div class="book-category-details">
                       <h3 class="book-category-title">${title}</h3>
                       <p class="book-category-author">${author}</p>
                     </div>
                   </div>
                 </li>
               </ul>
             </div>
           </div>`;
}

function updateTitle(title) {
  bestselllersTitle.textContent = title;
  stylizeLastWord(bestselllersTitle);
}

function stylizeLastWord(element) {
  let words = element.textContent.trim().split(' ');
  if (words.length > 1) {
    let lastWord = words.pop();
    element.innerHTML =
      words.join(' ') + ' <span class="last-word">' + lastWord + '</span>';
  }
}




function seeMorebuttonClick(category) {
  fetchBooksBySelectedCategory(category)
    .then(resp => {
      updateBestSellersList(resp);
      updateTitle(resp[0].list_name);
    })
    .catch(error => {
      console.error('Error loading books:', error);
    });
}


// Виклик функції при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('see-more')) {
      seeMorebuttonClick(event.target.id.replace(/_/g, ' '));
    }
  });
});

