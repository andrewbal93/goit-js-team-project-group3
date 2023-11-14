import axios from 'axios';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/';
// Запит Перелік категорій книг
export async function fetchBooksCategory() {
  const response = await axios.get('/books/category-list');
  return response.data;
}

// Запит Популярні книги, що належать до усіх категорій
export async function fetchAllTopBooks() {
  const response = await axios.get('/books/top-books');
  return response.data;
}

// Запит Книги окремої категорії
export async function fetchBooksBySelectedCategory(selectedCategory) {
  const response = await axios.get(
    `/books/category?category=${selectedCategory}`
  );
  return response.data;
}

// Запит Детальна інформація про книгу по id
export async function fetchBookById(bookId) {
  const response = await axios.get(`/books/${bookId}`);
  return response.data;
}

// fetchBooksCategory().then(resp => console.log(resp));
fetchAllTopBooks();
// fetchBooksBySelectedCategory().then(resp => console.log(resp));
// fetchBookById("643282b1e85766588626a0dc").then(resp => console.log(resp));
// console.log("hello");

