import { fetchBookById } from './bookShelfApi';

document.addEventListener('DOMContentLoaded', function () {
    const openModalLinks = document.querySelectorAll('.listener');
    const modal = document.querySelector('.modal');
    const closeModalButton = modal.querySelector('.modal-close');
    const addToShoppingListButton = modal.querySelector('.add-to-list');
    const backdrop = modal.querySelector('.modal-body');
    const underButtonText = modal.querySelector('.under-btn-text');

    // Open modal
    function openModal(bookId) {
        fetchBookById(bookId)
            .then((book) => {
                createMarkup(book);
                updateButtonText();
                modal.classList.add('open');
                document.body.style.overflow = 'hidden';
            })
            .catch((error) => console.error('Помилка при отриманні інформації про книгу:', error));
    }

    openModalLinks.forEach((link) => {
        link.addEventListener('click', function () {
            const bookId = link.id;
            openModal(bookId);
        });
    });

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeModalButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    addToShoppingListButton.addEventListener('click', function (event) {
        event.stopPropagation();
        let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
        const bookTitle = modal.querySelector('.book-title').textContent;

        if (shoppingList.includes(bookTitle)) {
            shoppingList = shoppingList.filter(item => item !== bookTitle);
        } else {
            shoppingList.push(bookTitle);
        }

        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        const isBookInList = updateShoppingListButton(shoppingList);
        underButtonText.style.display = isBookInList ? 'block' : 'none';
    });

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

    const initialShoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    updateShoppingListButton(initialShoppingList);
});

function createMarkup({ title, author, description, book_image, amazon_product_url }) {
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
              <a href="${amazon_product_url}" class="marketplace-logo apple-books"><img src="./img/salers2.png"></a>
            </div>
          </div>
        </div>
        <button class="add-to-list">Add to shopping list</button>
        <p class="under-btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”</p>
      </div>
    `;
  
    document.querySelector('.modal-body').innerHTML = markup;
}