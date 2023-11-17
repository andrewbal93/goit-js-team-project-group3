import Notiflix from 'notiflix';
import{fetchBookById} from './bookShelfApi';


  window.openModal = openModal;
  const modal =document.querySelector('.modal');
  const backdrop = modal.querySelector('.modal-body');
  const closeModalButton = modal.querySelector('.modal-close');
  


// Open modal
  async function openModal(id) {
    try {
    const book = await fetchBookById(id)
    modal.setAttribute('data-book', JSON.stringify(book));
    renderBookDetails(book); 

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateShoppingListButton(isBookInShoppingList(book));

    } catch (error)  {
      Notiflix.Notify.failure('error');
  };


}
  
function isBookInShoppingList(book) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  return shoppingList.some(item => item._id === book._id);
}
  
// Close modal 
    const closeModal = function () {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Відновлення прокрутки фону
        // underButtonText.style.display = 'none';

    };
    
    closeModalButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function(event) { 
    //додає перевірку куди було нажато якщо поза межами модалки то закрити вікно
    if (event.target === backdrop) {
          closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeModal();
        }
    });

    const addToShoppingListButton = modal.querySelector('.add-to-list');
const underButtonText = modal.querySelector('.under-btn-text');
    // Combined function for Add to / Remove from shopping list
function handleShoppingListButtonClick (event) {
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
  updateShoppingListButton(!isBookInList);
};

addToShoppingListButton.addEventListener('click', handleShoppingListButtonClick);

    
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
   

     function updateShoppingListButton(isBookInList) {
      // Оновлюємо текст кнопки в модалці
      const buttonText = isBookInList ? 'Remove from the shopping list' : 'Add to shopping list';
      addToShoppingListButton.textContent = buttonText;
      underButtonText.style.display = isBookInList ? 'block' : 'none';
  }