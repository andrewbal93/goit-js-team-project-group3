import axios from "axios";
axios.defaults.baseURL = 'https://books-backend.p.goit.global/';
// Запит Перелік категорій книг
export async function fetchBooksCategory() {
  return await axios.get('/books/category-list').then(resp => {
    return resp.data;
  });
}
// Запит Популярні книги, що належать до усіх категорій
export function fetchAllTopBooks() {
  return axios.get('/books/top-books').then(resp => {
    return resp.data;
  });
}
// Запит Книги окремої категорії
export function fetchBooksBySelectedCategory(selectedCategory) {
  return axios
    .get(`/books/category?category=${selectedCategory}`)
    .then(resp => {
      return resp.data;
    });
}
// Запит Детальна інформація про книгу по id
export function fetchBookById(bookId) {
  return axios.get(`/books/bookId?bookId=${bookId}`).then(resp => {
    return resp.data;
  });
}
fetchBooksCategory().then(resp => console.log(resp));
// fetchAllTopBooks().then(resp => console.log(resp));
// fetchBooksBySelectedCategory().then(resp => console.log(resp));
// fetchBookById().then(resp => console.log(resp));