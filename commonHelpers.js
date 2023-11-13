import"./assets/modulepreload-polyfill-ec808ebb.js";import{a}from"./assets/vendor-26fe51b3.js";a.defaults.baseURL="https://books-backend.p.goit.global/";async function p(){return(await a.get("/books/category-list")).data}async function u(){return(await a.get("/books/top-books")).data}async function g(t){return(await a.get(`/books/${t}`)).data}u().then(t=>console.log(t));g("643282b1e85766588626a0dc").then(t=>console.log(t));window.openModal=y;const c=document.querySelector(".modal");async function y(){c.classList.add("open"),document.body.style.overflow="hidden"}const b=c.querySelector(".modal-body"),k=c.querySelector(".modal-close"),d=function(){c.classList.remove("open"),document.body.style.overflow=""};k.addEventListener("click",d);b.addEventListener("click",d);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});const r=c.querySelector(".add-to-list"),h=c.querySelector(".under-btn-text");r.addEventListener("click",function(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=c.querySelector(".book-title").textContent;e.includes(o)?e=e.filter(s=>s!==o):e.push(o),localStorage.setItem("shoppingList",JSON.stringify(e));const n=m(e);h.style.display=n?"block":"none"});function m(t){const e=c.querySelector(".book-title").textContent,o=t.includes(e);return o?r.textContent="Remove from the shopping list":r.textContent="Add to shopping list",o}const f=JSON.parse(localStorage.getItem("shoppingList"))||[];m(f);function C(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${o} ${n} ${s}">

        <img class="bookByCategory-img" src="${t.book_image}" alt="${t.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${t.title}</h3>
          <p class="book-category-author">${t.author}</p>
        </div>
      </div>
    </li>
  `}function L(t,e){const o=document.querySelector(`.book-category[data-category="${t}"] .books-category-list`);if(o){const n=e.map((s,i)=>C(s,i)).join("");o.innerHTML=n}}function v(){u().then(t=>{t.forEach(e=>{L(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function S(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("span");n.textContent=t.toUpperCase(),o.appendChild(n);const s=document.createElement("div");s.className="books";const i=document.createElement("ul");i.className="books-category-list",s.appendChild(i);const l=document.createElement("button");return l.className="see-more",l.textContent="SEE MORE",e.appendChild(o),e.appendChild(s),e.appendChild(l),e}function E(){const t=document.querySelector(".best-sellers-list");p().then(e=>{e.forEach(o=>{const n=S(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Помилка при завантаженні категорій книг:",e))}document.addEventListener("DOMContentLoaded",E);document.addEventListener("DOMContentLoaded",v);const B=document.querySelector(".category-list-container");p().then(t=>t.map(e=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${e.list_name}
    </button>
  </li>`).join("")).then(t=>B.insertAdjacentHTML("afterbegin",t));const $=document.querySelector(".category-btn");$.addEventListener("click",q);function q(t){console.log(t)}
//# sourceMappingURL=commonHelpers.js.map
