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