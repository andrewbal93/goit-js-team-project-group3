import { fetchBooksBySelectedCategory } from './bookShelfApi';

const categoryListContainer = document.querySelector(
  '.category-list-container'
);
categoryListContainer.addEventListener('click', handleButtonClick);

const bestSellersList = document.querySelector('.best-sellers-list');

function handleButtonClick(event) {
  let category = event.target.textContent.trim();
  fetchBooksBySelectedCategory(`${category}`)
    .then(resp => {
      bestSellersList.innerHTML = '';

      resp.forEach(book => {
        const { title, author, book_image } = book;
        const bookMarkup = `<div class="books">
  <ul class="books-category-list">
    <li>
      <div class="book-category-details">
        <img src="${book_image}" alt="${title}" />
        <div class="book-category-details">
          <h3 class="book-category-title">${title}</h3>
          <p class="book-category-author">${author}</p>
        </div>
      </div>
    </li>
  </ul>
</div>`;

        bestSellersList.innerHTML += bookMarkup;
      });
    })
    .catch(error => {
      console.error('Помилка при завантаженні книг:', error);
    });
}
