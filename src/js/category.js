import { fetchBooksCategory } from './bookShelfApi';

const categoryListContainer = document.querySelector(
  '.category-list-container'
);

fetchBooksCategory()
  .then(resp => {
    // Створення розмітки для всіх отриманих категорій
    const categoriesMarkup = resp
      .map(
        elem => `<li class="category-list-item">

        <button class="category-btn" type="button">${elem.list_name}</button>
      </li>`

      )
      .join('');

    // Додавання 'All categories' у кінець розмітки
    const allCategoriesMarkup = `<li class="category-list-item">
        <button class="category-btn category-btn-active" type="button">All categories</button>
      </li>`;

    // Повна розмітка з усіма категоріями та 'All categories' на кінці
    return allCategoriesMarkup + categoriesMarkup;
  })
  .then(fullMarkUp =>
    categoryListContainer.insertAdjacentHTML('beforeend', fullMarkUp)
);
  

// Функція, яка викликається, коли текст h1 змінюється
function onH1Change(newText) {
  var list123 = document.querySelectorAll('.category-list-container li button');

  list123.forEach(function (item) {
    item.classList.remove('category-btn-active');

    if (item.textContent.trim() === newText.trim()) {
      item.classList.add('category-btn-active');
    }
    else if ( h1.textContent.trim() === 'Best Sellers Books' && item.textContent.trim() === 'All categories') {
      item.classList.add('category-btn-active');
    }
  });

}

// Створення нового спостерігача
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList' || mutation.type === 'characterData') {
      const newText = mutation.target.textContent; // Отримання нового тексту
      onH1Change(newText);
    }
  });
});

const h1 = document.querySelector('h1');

// Налаштування спостерігача на елемент h1
observer.observe(h1, { childList: true, characterData: true, subtree: true });
