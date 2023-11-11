import fetchBookById from './request';



document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeIcon = document.getElementById('closeIcon');
    const shoppingListBtn = document.getElementById('shoppingListBtn');
    const backdrop = modal.querySelector('.modal-body');

    closeIcon.addEventListener('click', closeModal);
    backdrop.addEventListener('click', handleBackdropClick);
    document.addEventListener('keydown', handleKeyDown);
    shoppingListBtn.addEventListener('click', updateShoppingList);

    function updateShoppingList() {
        // Оновлення інформації про список в localStorage
        console.log('Shopping list updated');
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
        removeEventListeners();
    }

    function handleBackdropClick(event) {
        if (event.target === backdrop) {
            closeModal();
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    function removeEventListeners() {
        closeIcon.removeEventListener('click', closeModal);
        backdrop.removeEventListener('click', handleBackdropClick);
        document.removeEventListener('keydown', handleKeyDown);
        shoppingListBtn.removeEventListener('click', updateShoppingList);
    }
});




async function fetchBookDetails(bookId) {
    try {
        // Зробіть запит до API з використанням Axios
        const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);

        // Отримайте детальну інформацію про книгу з відповіді
        const bookDetails = response.data;

        // Виведіть інформацію про книгу (змініть console.log за потреби)
        console.log('Book Image:', bookDetails.book_image);
        console.log('Title:', bookDetails.title);
        console.log('Author:', bookDetails.author);
        console.log('Description:', bookDetails.description);
        console.log('Buy Links:');
        bookDetails.buy_links.forEach(link => {
            console.log(`${link.name}: ${link.url}`);
        });

        // Поверніть об'єкт з детальною інформацією про книгу
        return bookDetails;
    } catch (error) {
        // Обробка помилок
        console.error('Error fetching book details:', error.message);
        throw error; // Прокидування помилки для подальшої обробки
    }
}

// Викликати функцію та передати ідентифікатор книги
fetchBookDetails('your_book_id_here')
    .then(bookDetails => {
        // Робіть що завгодно з отриманою інформацією про книгу
        console.log('Book Details:', bookDetails);
    })
    .catch(error => {
        // Обробити помилки, якщо є
        console.error('Error:', error.message);
    });