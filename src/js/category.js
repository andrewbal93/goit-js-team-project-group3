import { fetchBooksCategory, fetchBooksBySelectedCategory } from "./bookShelfApi";

const categoryListContainer = document.querySelector(".category-list-container"); 
const bestSellersList = document.querySelector('.best-sellers-list')

await fetchBooksCategory().then((resp) => {
    return resp.map((elem) => `<li class="category-list-item">
    <button class="category-btn category-one" type="button">
      ${elem.list_name}
    </button>
  </li>`).join("");
}).then((MarkUp) => categoryListContainer.insertAdjacentHTML("afterbegin", MarkUp))
const categoryButtons = document.querySelectorAll(".category-one");

async function catArrayValue(catName) {
  catName = catName.trim();
  const catArray = await fetchBooksBySelectedCategory(catName);
  const categoryElement = document.querySelector(`.best-sellers-list`);
  categoryElement.innerHTML = ""; 
  const categoryContainer = createCategoryContainer(catName);
  bestSellersList.appendChild(categoryContainer)
  loadBooks(catName, catArray);
  // console.log(catArray);
}

function loadBooks(categoryName, books) {
  const categoryElement = document.querySelector(`.book-category[data-category="${categoryName}"] .books-category-list`);
  if (categoryElement) {
    const booksHTML = books.map((book) => createBookCard(book)).join('');
    categoryElement.innerHTML = booksHTML;
  }
}

function createBookCard(book) {
  return `
    <li id="${book._id}" class="listener">
      <div class="book-category-card desktop-visible tablet-visible mobile-visible">
        <img class="bookByCategory-img" src="${book.book_image}" alt="${book.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${book.title}</h3>
          <p class="book-category-author">${book.author}</p>
        </div>
      </div>
    </li>
  `;
}

function createCategoryContainer(categoryName) {
  const container = document.createElement('div');
  container.className = 'book-category';
  container.setAttribute('data-category', categoryName);

  const titleDiv = document.createElement('div');
  titleDiv.className = 'category-title';

  const titleSpan = document.createElement('span');
  titleSpan.textContent = categoryName.toUpperCase();
  titleDiv.appendChild(titleSpan);

  const booksDiv = document.createElement('div');
  booksDiv.className = 'books';
  const ul = document.createElement('ul');
  ul.className = 'books-category-list';
  booksDiv.appendChild(ul);

  const button = document.createElement('button');
  button.className = 'see-more';
  button.textContent = 'SEE MORE';

  container.appendChild(titleDiv);
  container.appendChild(booksDiv);
  // container.appendChild(button);

  return container;
}

categoryButtons.forEach(function (button) {
  button.addEventListener('click', function() {
    // Ваш код обработки нажатия на кнопку здесь
    const btnText = button.textContent;
    catArrayValue(btnText);
    
  });
});


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