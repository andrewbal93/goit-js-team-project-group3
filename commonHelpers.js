import"./assets/modulepreload-polyfill-ec808ebb.js";import{a as d}from"./assets/vendor-26fe51b3.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".open-modal"),t=document.querySelector(".modal"),o=t.querySelector(".modal-close"),n=t.querySelector(".add-to-list"),s=t.querySelector(".modal-body"),a=t.querySelector(".under-btn-text");e.addEventListener("click",function(){t.classList.add("open"),document.body.style.overflow="hidden"});const i=function(){t.classList.remove("open"),document.body.style.overflow=""};o.addEventListener("click",i),s.addEventListener("click",i),document.addEventListener("keydown",function(r){r.key==="Escape"&&i()}),n.addEventListener("click",function(r){r.stopPropagation();let c=JSON.parse(localStorage.getItem("shoppingList"))||[];const l=t.querySelector(".book-title").textContent;c.includes(l)?c=c.filter(g=>g!==l):c.push(l),localStorage.setItem("shoppingList",JSON.stringify(c));const y=u(c);a.style.display=y?"block":"none"});function u(r){const c=t.querySelector(".book-title").textContent,l=r.includes(c);return l?n.textContent="Remove from the shopping list":n.textContent="Add to shopping list",l}const b=JSON.parse(localStorage.getItem("shoppingList"))||[];u(b)});d.defaults.baseURL="https://books-backend.p.goit.global/";async function p(){return(await d.get("/books/category-list")).data}function m(){return d.get("/books/top-books").then(e=>e.data)}m();function k(e,t){const o=t===0?"mobile-visible":"",n=t<3?"tablet-visible":"",s=t<5?"desktop-visible":"";return`
    <li id="${e._id}" class="listener">
      <div class="book-category-card ${o} ${n} ${s}">
        <img class="bookByCategory-img" src="${e.book_image}" alt="${e.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${e.title}</h3>
          <p class="book-category-author">${e.author}</p>
        </div>
      </div>
    </li>
  `}function h(e,t){const o=document.querySelector(`.book-category[data-category="${e}"] .books-category-list`);if(o){const n=t.map((s,a)=>k(s,a)).join("");o.innerHTML=n}}function f(){m().then(e=>{e.forEach(t=>{h(t.list_name,t.books)})}).catch(e=>console.error("Помилка при завантаженні категорій книг:",e))}function L(e){const t=document.createElement("div");t.className="book-category",t.setAttribute("data-category",e);const o=document.createElement("div");o.className="category-title";const n=document.createElement("span");n.textContent=e.toUpperCase(),o.appendChild(n);const s=document.createElement("div");s.className="books";const a=document.createElement("ul");a.className="books-category-list",s.appendChild(a);const i=document.createElement("button");return i.className="see-more",i.textContent="SEE MORE",t.appendChild(o),t.appendChild(s),t.appendChild(i),t}function v(){const e=document.querySelector(".best-sellers-list");p().then(t=>{t.forEach(o=>{const n=L(o.list_name);e.appendChild(n)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}document.addEventListener("DOMContentLoaded",v);document.addEventListener("DOMContentLoaded",f);const C=document.querySelector(".category-list-container");p().then(e=>e.map(t=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${t.list_name}
    </button>
  </li>`).join("")).then(e=>C.insertAdjacentHTML("afterbegin",e));
//# sourceMappingURL=commonHelpers.js.map
