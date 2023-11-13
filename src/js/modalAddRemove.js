import { fetchBookById, fetchBooksBySelectedCategory } from './bookShelfApi';

document.addEventListener('DOMContentLoaded', function () {
  const openModalLinks = document.querySelectorAll('.listener');
  const modal = document.getElementById('modal');
  const closeModalButton = modal.querySelector('.modal-close');
  const addToShoppingListButton = modal.querySelector('.add-to-list');
  const underButtonText = modal.querySelector('.under-btn-text');

  function openModal(book) {
    createMarkup(book);
    updateButtonText();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  openModalLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const bookId = link.id;
      fetchBookById(bookId)
        .then((book) => openModal(book))
        .catch((error) => console.error('Error fetching book data:', error));
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeModalButton.addEventListener('click', closeModal);
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

function createMarkup(book) {
  const modalContent = document.querySelector('.modal-content');
  modalContent.querySelector('.book-cover').src = book.book_image;
  modalContent.querySelector('.book-title').textContent = book.title;
  modalContent.querySelector('.book-author').textContent = book.author;
  modalContent.querySelector('.book-description').textContent = book.description;

  // Додайте посилання на торгівельні майданчики тут
  const marketplaceDiv = modalContent.querySelector('.marketplace');
  marketplaceDiv.innerHTML = ''; // Очистіть попередні посилання
  book.marketplaces.forEach(marketplace => {
    const marketplaceLink = document.createElement('a');
    marketplaceLink.href = marketplace.url;
    marketplaceLink.className = `marketplace-logo ${marketplace.name.toLowerCase()}`;
    marketplaceLink.innerHTML = `<img src="${marketplace.logo}" alt="${marketplace.name}">`;
    marketplaceDiv.appendChild(marketplaceLink);
  });
}
function updateButtonText() {
    // Додайте ваш код оновлення тексту кнопки тут
  }