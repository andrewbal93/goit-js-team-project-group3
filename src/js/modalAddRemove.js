
import{fetchBookById, fetchBooksCategory, fetchAllTopBooks, fetchBooksBySelectedCategory} from './bookShelfApi';

 // Open modal
  window.openModal = openModal;
  const modal =document.querySelector('.modal');
  
  async function openModal() {
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

     // Add to / Remove from shopping list
    const addToShoppingListButton = modal.querySelector('.add-to-list');
     const underButtonText = modal.querySelector('.under-btn-text');
    
         addToShoppingListButton.addEventListener('click', function (event) {
        event.stopPropagation();
        // Оновлюємо інформацію про список в localStorage
        let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
        const bookTitle = modal.querySelector('.book-title').textContent;

        if (shoppingList.includes(bookTitle)) {
            shoppingList = shoppingList.filter(item => item !== bookTitle);
        } else {
            shoppingList.push(bookTitle);
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