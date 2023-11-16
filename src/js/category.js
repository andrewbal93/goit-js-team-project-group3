import { fetchBooksCategory } from './bookShelfApi';

const categoryListContainer = document.querySelector(
  '.category-list-container'
);

fetchBooksCategory()
  .then(resp => {
    return resp
      .map(
        elem => `<li class="category-list-item">
  <button class="category-btn" type="button">
    ${elem.list_name}
  </button>
</li>`
      )
      .join('');
  })
  .then(MarkUp =>
    categoryListContainer.insertAdjacentHTML('afterbegin', MarkUp)
  );

const btnAllCategories = document.querySelector('.category-btn');
const categoryList = document.querySelector('.category-list');

categoryList.addEventListener('click', onClickALLCategories);

function onClickALLCategories(event) {
  if (event.target === btnAllCategories) {
    btnAllCategories.classList.add('category-btn-active');
  }
  btnAllCategories.classList.remove('category-btn-active');
}
