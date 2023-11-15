import Notiflix from 'notiflix';
import{fetchBookById, fetchBooksCategory, fetchAllTopBooks, fetchBooksBySelectedCategory} from './bookShelfApi';


 // Open modal
  window.openModal = openModal;
  const modal =document.querySelector('.modal');

  async function openModal(id) {
    fetchBookById(id)
  .then(book => { 
      // Додаємо об'єкт book до атрибута data-book в розмітці
      modal.setAttribute('data-book', JSON.stringify(book));
    // Тут ви можете викликати функцію для відображення даних в модалці
    renderBookDetails(book);
    const isBookInList = checkBookInShoppingList(book._id);
    
    addToShoppingListButton.textContent = isBookInList ? 'Remove from the shopping list' : 'Add to shopping list';
  })
  .catch(error => {
    Notiflix.Notify.failure("Помилка при отриманні даних про книгу:");
  });
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  }
  
// Close modal 
  const backdrop = modal.querySelector('.modal-body');
  const closeModalButton = modal.querySelector('.modal-close');
  
    const closeModal = function () {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Відновлення прокрутки фону
        // underButtonText.style.display = 'none';

    };
    
    closeModalButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Combined function for Add to / Remove from shopping list
const handleShoppingListButtonClick = function (event) {
  event.stopPropagation();

  // Оновлюємо інформацію про список в localStorage
  let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  // Отримуємо об'єкт book з атрибута data-book
  const storedBook = JSON.parse(modal.getAttribute('data-book'));

  // Check if the book is in the shopping list
  const isBookInList = shoppingList.some(item => item._id === storedBook._id);

  if (isBookInList) {
      shoppingList = shoppingList.filter(item => item._id !== storedBook._id);
  } else {
      shoppingList.push(storedBook);
  }

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  // Оновлюємо текст кнопки в модалці
  updateShoppingListButton(shoppingList);
  
};

// Add to / Remove from shopping list button
const addToShoppingListButton = modal.querySelector('.add-to-list');
const underButtonText = modal.querySelector('.under-btn-text');

// Attach the event listener
addToShoppingListButton.addEventListener('click', handleShoppingListButtonClick);

// Функція для оновлення тексту кнопки відповідно до стану списку
function updateShoppingListButton(shoppingList) {
  const storedBook = JSON.parse(modal.getAttribute('data-book'));
  
  // Check if the book is in the shopping list
  const isBookInList = shoppingList.some(item => item._id === storedBook._id);

  // Оновлюємо текст кнопки в модалці
  if (isBookInList) {
      addToShoppingListButton.textContent = 'Remove from the shopping list';
      underButtonText.style.display = 'block';
      
  } else {
      addToShoppingListButton.textContent = 'Add to shopping list';
      underButtonText.style.display = 'none';
  }

  return isBookInList;
}

    // // Ініціалізація тексту кнопки при завантаженні сторінки
    const initialShoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    updateShoppingListButton(initialShoppingList, addToShoppingListButton);
    // // underButtonText.style.display = 'none';



    
    function renderBookDetails(book) {
      const bookCover = document.querySelector('.book-cover');
      const bookTitle = document.querySelector('.book-title');
      const bookAuthor = document.querySelector('.book-author');
      const bookDescription = document.querySelector('.book-description');
      const amazonLink = document.querySelector('.marketplace-logo.amazon');
      const appleBooksLink = document.querySelector('.marketplace-logo.apple-books');
    
      // Підставляємо значення в HTML
      bookCover.src = book.book_image;
      bookCover.alt = book.title;
      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
      bookDescription.textContent = book.description || "No description available";
    
      // Підставляємо посилання для покупок
      amazonLink.href = book.buy_links.find(link => link.name === 'Amazon')?.url || '';
      appleBooksLink.href = book.buy_links.find(link => link.name === 'Apple Books')?.url || '';
    }
    
     // Function to check if a book is in the shopping list
function checkBookInShoppingList(bookId) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  return shoppingList.some(item => item._id === bookId);
} 