import { fetchBooksBySelectedCategory } from './bookShelfApi';

const categoryListContainer = document.querySelector(
  '.category-list-container'
);

const bestSellersList = document.querySelector('.best-sellers-list');
const bestselllersTitle = document.querySelector('.bestselllersTitle');

categoryListContainer.addEventListener('click', handleButtonClick);

export function handleButtonClick(event) {
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

export function updateBestSellersList(books) {
  bestSellersList.innerHTML = '';
  books.forEach(book => {
    bestSellersList.innerHTML += createBookMarkup(book);
  });
  bestSellersList.classList.add('books-list');
}

export function createBookMarkup({ title, author, book_image }) {
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

export function updateTitle(title) {
  bestselllersTitle.textContent = title;
  stylizeLastWord(bestselllersTitle);
}

export function stylizeLastWord(element) {
  let words = element.textContent.trim().split(' ');
  if (words.length > 1) {
    let lastWord = words.pop();
    element.innerHTML =
      words.join(' ') + ' <span class="last-word">' + lastWord + '</span>';
  }
}