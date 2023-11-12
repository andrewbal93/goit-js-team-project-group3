import axios from "axios";
axios.defaults.baseURL = 'https://books-backend.p.goit.global/';
// Запит Перелік категорій книг
export async function fetchBooksCategory() {
  const response = await axios.get('/books/category-list')
    return response.data;
}

// async function getApi(searchImg, page, perPage) {
    // const URL = 'https://pixabay.com/api/';
    // const API_KEY = "40442533-4b6791bab363289733298af78";

  //   try {
  //     const response = await axios.get(
  //       `${URL}?key=${API_KEY}&q=${searchImg}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
  //     return response.data;
      
  //   } catch (error) {
  //     Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  //   }
    
  // }

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

// fetchBooksCategory().then(resp => console.log(resp));
// fetchAllTopBooks().then(resp => console.log(resp));
// fetchBooksBySelectedCategory().then(resp => console.log(resp));
// fetchBookById().then(resp => console.log(resp));