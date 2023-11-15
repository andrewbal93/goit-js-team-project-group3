import store1 from '../img/salers1.png';
import store2 from '../img/salers2.png';
import dumpIcon from '../img/sprite.svg';

const list = document.querySelector('.js-shopping_list');
list.addEventListener('click', deleteCard);

function cardBook({
  _id,
  book_image,
  title,
  list_name,
  author,
  description,
  buy_links,
}) {
  return `<li class="shopping-list-book-item js-sl-item-${_id}">
        <button class="btn-dump js-btn-dump" type="button" id=${_id} aria-label="dump"> 
        <svg with="20" height="20"><use href="${dumpIcon}#icon-dump"></use>
        </svg>
        </button>
        <img class="shop-list-item-img" src="${book_image}" alt="${book_image}" width="100" height="142" loading="lazy"/>  
      <div class="shop-list-description-wrapper"> 
       
        <h3 class="shop-list-item-title">${title}</h3>
        
        <p class="shop-list-item-category">${list_name}</p>
        <p class="shop-list-item-description">${description}</p>
        <div class="buy-item-wrapper">
          <p class="shop-list-item-author">${author}</p>
          <ul class="buy-list-shop list">
            <li class="buy-item">
              <a href="${buy_links[0].url}"><img class="store-1 store-1-sl" src="${store1}" alt="" width="46" loading="lazy"/></a>
            </li>
            <li class="buy-item">
              <a href="${buy_links[1].url}"><img class="store-2 store-2-sl" src="${store2}" alt="" width="33" loading="lazy"/></a>
            </li>
          </ul>
        </div>
      </div>
      </li>`;
}

function loadPage() {
  const shopingListData =
    JSON.parse(localStorage.getItem('shoppingList')) || [];
  const markup = shopingListData.map(cardBook).join('');
  if (shopingListData.length !== 0) {
    list.firstElementChild.style.display = 'none';
  }

  list.insertAdjacentHTML('beforeend', markup);
}
loadPage();
function deleteCard(evt) {
  console.log(evt.target.parentNode.parentNode);
  if (!evt.target.parentNode.parentNode.classList.contains('js-btn-dump')) {
    return;
  }
  const data = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const filteredData = data.filter(
    book => book._id !== evt.target.parentNode.parentNode.id
  );
  evt.target.parentNode.parentNode.parentNode.remove();
  localStorage.setItem('shoppingList', JSON.stringify(filteredData));
  console.log(filteredData);
  if (filteredData.length === 0) {
    list.firstElementChild.style.display = 'block';
  }
}
