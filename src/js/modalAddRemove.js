

import Notiflix from 'notiflix';
import{fetchBookById, fetchBooksCategory, fetchAllTopBooks, fetchBooksBySelectedCategory} from './bookShelfApi';



// document.addEventListener('DOMContentLoaded', function () {
//     const openModalLink = document.querySelector('.listener');
    
//     
//     
//     
//    
    
    
//     // Open modal
//     openModalLink.addEventListener('click', function () {
//         modal.classList.add('open');
//         document.body.style.overflow = 'hidden'; // Заборона прокрутки фону
//     });

//     // Close modal
//     const closeModal = function () {
//         modal.classList.remove('open');
//         document.body.style.overflow = ''; // Відновлення прокрутки фону
//         // underButtonText.style.display = 'none';
//     };

//     closeModalButton.addEventListener('click', closeModal);
//     backdrop.addEventListener('click', closeModal);

//     document.addEventListener('keydown', function (event) {
//         if (event.key === 'Escape') {
//             closeModal();
//         }
//     });

//     // Add to / Remove from shopping list
//     addToShoppingListButton.addEventListener('click', function (event) {
//         event.stopPropagation();
//         // Оновлюємо інформацію про список в localStorage
//         let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
//         const bookTitle = modal.querySelector('.book-title').textContent;

//         if (shoppingList.includes(bookTitle)) {
//             shoppingList = shoppingList.filter(item => item !== bookTitle);
//         } else {
//             shoppingList.push(bookTitle);
//         }

//         localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

//         // Оновлюємо текст кнопки в модалці
//         const isBookInList = updateShoppingListButton(shoppingList);
//         underButtonText.style.display = isBookInList ? 'block' : 'none';
//     });

//     // Функція для оновлення тексту кнопки відповідно до стану списку
//     function updateShoppingListButton(shoppingList) {
//         const bookTitle = modal.querySelector('.book-title').textContent;
//         const isBookInList = shoppingList.includes(bookTitle);

//         if (isBookInList) {
//             addToShoppingListButton.textContent = 'Remove from the shopping list';
//         } else {
//             addToShoppingListButton.textContent = 'Add to shopping list';
//         }
//         return isBookInList;
//     }

//     // Ініціалізація тексту кнопки при завантаженні сторінки
//     const initialShoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
//     updateShoppingListButton(initialShoppingList);
//     // underButtonText.style.display = 'none';
// });

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
        console.log()
    };
    
    closeModalButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

     // Add to / Remove from shopping list
    const addToShoppingListButton = modal.querySelector('.add-to-list');
     const underButtonText = modal.querySelector('.under-btn-text');
    
         addToShoppingListButton.addEventListener('click', function (event) {
        event.stopPropagation();

          // Отримуємо об'єкт book з атрибута data-book
    const storedBook = JSON.parse(modal.getAttribute('data-book'));
        
        // Оновлюємо інформацію про список в localStorage
        let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
        
        if (shoppingList.includes(storedBook._id)) {
          shoppingList = shoppingList.filter(item => item !== storedBook._id);
        } else {
          shoppingList.push(storedBook);
        }

        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

        // Оновлюємо текст кнопки в модалці
        const isBookInList = updateShoppingListButton(shoppingList);
        underButtonText.style.display = isBookInList ? 'block' : 'none';
    });

    // Функція для оновлення тексту кнопки відповідно до стану списку
    function updateShoppingListButton(shoppingList) {
        const bookTitle = modal.querySelector('.book-title').textContent;
        const isBookInList = shoppingList.includes(bookTitle);

        if (isBookInList) {
            addToShoppingListButton.textContent = 'Remove from the shopping list';
        } else {
            addToShoppingListButton.textContent = 'Add to shopping list';
        }
        return isBookInList;
    }

    // Ініціалізація тексту кнопки при завантаженні сторінки
    const initialShoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    updateShoppingListButton(initialShoppingList);
    // underButtonText.style.display = 'none';


    
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
    
      