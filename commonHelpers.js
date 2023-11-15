import"./assets/mobMenu-f095f4e8.js";import{a as r,N as B}from"./assets/vendor-77e6b4aa.js";r.defaults.baseURL="https://books-backend.p.goit.global/";async function k(){return(await r.get("/books/category-list")).data}async function h(){return(await r.get("/books/top-books")).data}async function f(t){return(await r.get(`/books/category?category=${t}`)).data}async function E(t){return(await r.get(`/books/${t}`)).data}h();function q(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${o} ${n} ${s}">

        <img class="bookByCategory-img" src="${t.book_image}" alt="${t.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${t.title}</h3>
          <p class="book-category-author">${t.author}</p>
        </div>
      </div>
    </li>
  `}function _(t,e){const o=document.querySelector(`.book-category[data-category="${t}"] .books-category-list`);if(o){const n=e.map((s,c)=>q(s,c)).join("");o.innerHTML=n}}function $(){h().then(t=>{t.forEach(e=>{_(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function T(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("span");n.textContent=t.toUpperCase(),o.appendChild(n);const s=document.createElement("div");s.className="books";const c=document.createElement("ul");c.className="books-category-list",s.appendChild(c);const l=document.createElement("button");return l.id=t.replace(/\s+/g,"_"),l.classList.add("see-more"),l.textContent="SEE MORE",e.appendChild(o),e.appendChild(s),e.appendChild(l),e}function M(){const t=document.querySelector(".best-sellers-list");k().then(e=>{e.forEach(o=>{const n=T(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Error loading books:",e))}document.addEventListener("DOMContentLoaded",()=>{M(),$()});const w=document.querySelector(".category-list-container");k().then(t=>t.map(e=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${e.list_name}
    </button>
  </li>`).join("")).then(t=>w.insertAdjacentHTML("afterbegin",t));const A=document.querySelector(".category-btn");A.addEventListener("click",x);function x(t){console.log(t)}window.openModal=N;const i=document.querySelector(".modal");async function N(t){E(t).then(e=>{i.setAttribute("data-book",JSON.stringify(e)),J(e);const o=H(e._id);a.textContent=o?"Remove from the shopping list":"Add to shopping list"}).catch(e=>{B.Notify.failure("Помилка при отриманні даних про книгу:")}),i.classList.add("open"),document.body.style.overflow="hidden"}const I=i.querySelector(".modal-body"),O=i.querySelector(".modal-close"),p=function(){i.classList.remove("open"),document.body.style.overflow=""};O.addEventListener("click",p);I.addEventListener("click",p);document.addEventListener("keydown",function(t){t.key==="Escape"&&p()});const L=function(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(i.getAttribute("data-book"));e.some(s=>s._id===o._id)?e=e.filter(s=>s._id!==o._id):e.push(o),localStorage.setItem("shoppingList",JSON.stringify(e)),S(e)},a=i.querySelector(".add-to-list"),y=i.querySelector(".under-btn-text");a.addEventListener("click",L);function S(t){const e=JSON.parse(i.getAttribute("data-book"));if(!e)return!1;const o=t.some(n=>n._id===e._id);return o?(a.textContent="Remove from the shopping list",y.style.display="block",a.addEventListener("click",L)):(a.textContent="Add to shopping list",y.style.display="none"),o}const D=JSON.parse(localStorage.getItem("shoppingList"))||[];S(D);function J(t){var g,m;const e=document.querySelector(".book-cover"),o=document.querySelector(".book-title"),n=document.querySelector(".book-author"),s=document.querySelector(".book-description"),c=document.querySelector(".marketplace-logo.amazon"),l=document.querySelector(".marketplace-logo.apple-books");e.src=t.book_image,e.alt=t.title,o.textContent=t.title,n.textContent=t.author,s.textContent=t.description||"No description available",c.href=((g=t.buy_links.find(d=>d.name==="Amazon"))==null?void 0:g.url)||"",l.href=((m=t.buy_links.find(d=>d.name==="Apple Books"))==null?void 0:m.url)||""}function H(t){return(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(o=>o._id===t)}const j=document.querySelector(".category-list-container"),u=document.querySelector(".best-sellers-list"),b=document.querySelector(".bestselllersTitle");j.addEventListener("click",z);function z(t){const e=t.target.textContent.trim();f(e).then(o=>{v(o),C(o[0].list_name)}).catch(o=>{console.error("Error loading books:",o)})}function v(t){u.innerHTML="",t.forEach(e=>{u.innerHTML+=R(e)}),u.classList.add("books-list")}function R({title:t,author:e,book_image:o,_id:n}){return`<div class="book-category">
             <div class="books">
               <ul class="books-category-list">
                 <li id="${n}" class="listener" onclick="openModal('${n}')">
                   <div class="book-category-card mobile-visible tablet-visible">
                     <img class='bookByCategory-img' src="${o}" alt="${t}" />
                     <div class="book-category-details">
                       <h3 class="book-category-title">${t}</h3>
                       <p class="book-category-author">${e}</p>
                     </div>
                   </div>
                 </li>
               </ul>
             </div>
           </div>`}function C(t){b.textContent=t,U(b)}function U(t){let e=t.textContent.trim().split(" ");if(e.length>1){let o=e.pop();t.innerHTML=e.join(" ")+' <span class="last-word">'+o+"</span>"}}function V(t){f(t).then(e=>{v(e),C(e[0].list_name)}).catch(e=>{console.error("Error loading books:",e)})}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",function(t){t.target.classList.contains("see-more")&&V(t.target.id.replace(/_/g," "))})});window.onscroll=function(){W()};function W(){const t=document.querySelector(".scrollup");document.body.scrollTop>500||document.documentElement.scrollTop>500?t.style.display="block":t.style.display="none"}function P(){window.scrollTo({top:0,behavior:"smooth"})}const F=document.querySelector(".scrollup");F.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
