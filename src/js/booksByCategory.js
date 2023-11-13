import {
  fetchBooksCategory,
  fetchAllTopBooks,
} from './bookShelfApi';

// Функція для створення HTML для карточки книги
function createBookCard(book, index) {
  const mobileVisible = index === 0 ? 'mobile-visible' : '';
  const tabletVisible = index < 3 ? 'tablet-visible' : '';
  const desktopVisible = index < 5 ? 'desktop-visible' : '';
  return `
    <li id="book-${book._id}" class="listener">
      <div class="book-category-card ${mobileVisible} ${tabletVisible} ${desktopVisible}">
        <img class="bookByCategory-img" src="${book.book_image}" alt="${book.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${book.title}</h3>
          <p class="book-category-author">${book.author}</p>
        </div>
      </div>
    </li>
  `;
}

// Функція для завантаження книг у відповідну категорію
function loadBooks(categoryName, books) {
  const categoryElement = document.querySelector(`.book-category[data-category="${categoryName}"] .books-category-list`);
  if (categoryElement) {
    const booksHTML = books.map((book, index) => createBookCard(book, index)).join('');
    categoryElement.innerHTML = booksHTML;
  }
}

// Функція для отримання та відображення книг по категоріям
function fetchAndDisplayBooks() {

  fetchAllTopBooks()
    .then(categories => {
      categories.forEach(category => {
        loadBooks(category.list_name, category.books);
      });
    })
    .catch(error => console.error('Помилка при завантаженні категорій книг:', error));
}

// !!!!!!!!!!!!!!!!!!!!

// Функція для створення HTML контейнера категорії
function createCategoryContainer(categoryName) {
  const container = document.createElement('div');
  container.className = 'book-category';
  container.setAttribute('data-category', categoryName);

  const titleDiv = document.createElement('div');
  titleDiv.className = 'category-title';

  const titleSpan = document.createElement('span');
  titleSpan.textContent = categoryName.toUpperCase();
  titleDiv.appendChild(titleSpan);

  const booksDiv = document.createElement('div');
  booksDiv.className = 'books';
  const ul = document.createElement('ul');
  ul.className = 'books-category-list';
  booksDiv.appendChild(ul);

  const button = document.createElement('button');
  button.className = 'see-more';
  button.textContent = 'SEE MORE';

  container.appendChild(titleDiv);
  container.appendChild(booksDiv);
  container.appendChild(button);

  return container;
}

// Функція для отримання категорій та додавання контейнерів до DOM
function fetchAndDisplayCategories() {

  const bestSellersList = document.querySelector('.best-sellers-list') 

  fetchBooksCategory()
    .then(categories => {
      categories.forEach(category => {
        const categoryContainer = createCategoryContainer(category.list_name);
        bestSellersList.appendChild(categoryContainer)
      });
    })
    .catch(error => console.error('Помилка при завантаженні категорій книг:', error));
}




// Виклик функції при завантаженні сторінки

//Додавання контейнерів
document.addEventListener('DOMContentLoaded', fetchAndDisplayCategories);

//Додавання карток
document.addEventListener('DOMContentLoaded', fetchAndDisplayBooks);
