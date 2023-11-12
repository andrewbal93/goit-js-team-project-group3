import fetchBooksCategory from './bookShelfApi';

fetchBooksCategory().then(resp => createMarcup(resp));

const btnAllCategories = document.querySelector('.all-category-btn-js');
const categoryList = document.querySelector('.category-list-js');

export function createMarcup(allCategories) {
  const marcup = allCategories
    .map(
      category => `<li class="category-list-item category-list-item-js">
    <button class="category-btn category-btn-js" type="button">
      ${category.list_name}
    </button>
  </li>`
    )
    .join('');

  categoryList.insertAdjacentHTML('beforeend', marcup);
}

btnAllCategories.addEventListener('click', onAllCategories);

export function onAllCategories(event) {
  console.log(event);
}
