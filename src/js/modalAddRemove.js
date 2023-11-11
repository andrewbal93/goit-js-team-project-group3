
// import{fetchBookById, fetchBooksCategory, fetchAllTopBooks, fetchBooksBySelectedCategory} from './request';



document.addEventListener('DOMContentLoaded', function () {
    const openModalLink = document.querySelector('.open-modal');
    const modal = document.querySelector('.modal');
    const closeModalButton = modal.querySelector('.modal-close');
    const addToShoppingListButton = modal.querySelector('.add-to-list');
    const backdrop = modal.querySelector('.modal-body');

    // Open modal
    openModalLink.addEventListener('click', function () {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Заборона прокрутки фону
    });

    // Close modal
    const closeModal = function () {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Відновлення прокрутки фону
    };

    closeModalButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Add to / Remove from shopping list
    shoppingListButton.addEventListener('click', function () {
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
        updateShoppingListButton(shoppingList);
    });

    // Функція для оновлення тексту кнопки відповідно до стану списку
    function updateShoppingListButton(shoppingList) {
        const bookTitle = modal.querySelector('.book-title').textContent;
        const isBookInList = shoppingList.includes(bookTitle);

        if (isBookInList) {
            shoppingListButton.textContent = 'Remove from the shopping list';
        } else {
            shoppingListButton.textContent = 'Add to shopping list';
        }
    }

    // Ініціалізація тексту кнопки при завантаженні сторінки
    const initialShoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    updateShoppingListButton(initialShoppingList);
});


