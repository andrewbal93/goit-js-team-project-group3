import{a as l}from"./assets/vendor-26fe51b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();l.defaults.baseURL="https://books-backend.p.goit.global/";async function u(){return(await l.get("/books/category-list")).data}async function p(){return(await l.get("/books/top-books")).data}async function y(t){return(await l.get(`/books/${t}`)).data}p();y();window.openModal=f;const c=document.querySelector(".modal");async function f(){c.classList.add("open"),document.body.style.overflow="hidden"}const g=c.querySelector(".modal-body"),b=c.querySelector(".modal-close"),d=function(){c.classList.remove("open"),document.body.style.overflow=""};b.addEventListener("click",d);g.addEventListener("click",d);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});const a=c.querySelector(".add-to-list"),h=c.querySelector(".under-btn-text");a.addEventListener("click",function(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const n=c.querySelector(".book-title").textContent;e.includes(n)?e=e.filter(o=>o!==n):e.push(n),localStorage.setItem("shoppingList",JSON.stringify(e));const i=m(e);h.style.display=i?"block":"none"});function m(t){const e=c.querySelector(".book-title").textContent,n=t.includes(e);return n?a.textContent="Remove from the shopping list":a.textContent="Add to shopping list",n}const k=JSON.parse(localStorage.getItem("shoppingList"))||[];m(k);function L(t,e){const n=e===0?"mobile-visible":"",i=e<3?"tablet-visible":"",o=e<5?"desktop-visible":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${n} ${i} ${o}">

        <img class="bookByCategory-img" src="${t.book_image}" alt="${t.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${t.title}</h3>
          <p class="book-category-author">${t.author}</p>
        </div>
      </div>
    </li>
  `}function C(t,e){const n=document.querySelector(`.book-category[data-category="${t}"] .books-category-list`);if(n){const i=e.map((o,s)=>L(o,s)).join("");n.innerHTML=i}}function v(){p().then(t=>{t.forEach(e=>{C(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function S(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const n=document.createElement("div");n.className="category-title";const i=document.createElement("span");i.textContent=t.toUpperCase(),n.appendChild(i);const o=document.createElement("div");o.className="books";const s=document.createElement("ul");s.className="books-category-list",o.appendChild(s);const r=document.createElement("button");return r.className="see-more",r.textContent="SEE MORE",e.appendChild(n),e.appendChild(o),e.appendChild(r),e}function E(){const t=document.querySelector(".best-sellers-list");u().then(e=>{e.forEach(n=>{const i=S(n.list_name);t.appendChild(i)})}).catch(e=>console.error("Помилка при завантаженні категорій книг:",e))}document.addEventListener("DOMContentLoaded",E);document.addEventListener("DOMContentLoaded",v);const B=document.querySelector(".category-list-container");u().then(t=>t.map(e=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${e.list_name}
    </button>
  </li>`).join("")).then(t=>B.insertAdjacentHTML("afterbegin",t));const q=document.querySelector(".category-btn");q.addEventListener("click",M);function M(t){console.log(t)}
//# sourceMappingURL=commonHelpers.js.map
