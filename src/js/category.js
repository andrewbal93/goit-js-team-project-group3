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
btnAllCategories.addEventListener('click', onClickAllCategories);

function onClickAllCategories(event) {
  console.log(event);
}

// const categoryFetchResponce = fetchBooksCategory().then((value) =>
//     value.json()).then((data) => {return data;});

// console.log(categoryFetchResponce)

// const MarkUp = categoryFetchResponce.map((elem) => `<li class="category-list-item">
//     <button class="category-btn" type="button">
//       ${elem["list_name"]}
//     </button>
//   </li>`).join("");
// categoryListContainer.insertAdjacentHTML("afterbegin", MarkUp);

/* <li class="category-list-item">
    <button class="category-btn" type="button">
      Category Placeholder Text
    </button>
  </li> */
