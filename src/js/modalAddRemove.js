
import{fetchBookById, fetchBooksCategory, fetchAllTopBooks, fetchBooksBySelectedCategory} from './bookShelfApi';



document.addEventListener('DOMContentLoaded', function () {
    const openModalLink = document.querySelector('.listener');
    const modal = document.querySelector('.modal');
    const closeModalButton = modal.querySelector('.modal-close');
    const addToShoppingListButton = modal.querySelector('.add-to-list');
    const backdrop = modal.querySelector('.modal-body');
    const underButtonText = modal.querySelector('.under-btn-text');
    
    
    // Open modal
    openModalLink.addEventListener('click', function () {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Заборона прокрутки фону
    });

    // Close modal
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
});




function createMarkup({ _id, list_name, date, age_group, amazon_product_url, author, book_image }) {
    // Тут ви можете використовувати отримані значення
    // для виведення вмісту модального вікна
    const markup = `
      <div class="modal-content">
        <svg class="modal-close">
          <use href="./img/sprite.svg#icon-x-close"></use>
        </svg>
  
        <div class="box">
          <img
            class="book-cover"
            src="${book_image}"
            alt=""
            width="287"
            height="408"
          />
          <div class="text-content">
            <h2 class="book-title">${title}</h2>
            <p class="book-author">${author}</p>
            <p class="book-description">
              ${description}
            </p>
            <div class="marketplace">
              <a href="${amazon_product_url}" class="marketplace-logo amazon"><img src="./img/salers1.png"></a>
              <!-- Додайте посилання та логотип для інших майданчиків -->
            </div>
          </div>
        </div>
        <button class="add-to-list">Add to shopping list</button>
        <p class="under-btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”</p>
      </div>
    `;
  
    // Тут ви можете використовувати `markup` як вам потрібно
    // наприклад, вставити його в DOM
    document.querySelector('.modal-body').innerHTML = markup;
  }
  
