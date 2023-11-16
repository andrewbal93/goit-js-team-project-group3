import"./assets/mobMenu-63b51df1.js";import{a,N as B}from"./assets/vendor-77e6b4aa.js";a.defaults.baseURL="https://books-backend.p.goit.global/";async function h(){return(await a.get("/books/category-list")).data}async function f(){return(await a.get("/books/top-books")).data}async function v(t){return(await a.get(`/books/category?category=${t}`)).data}async function q(t){return(await a.get(`/books/${t}`)).data}f();function w(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${o} ${n} ${s}">
        <div class="overlay-div">
          <img class="bookByCategory-img" src="${t.book_image}" alt="${t.title}">
          <p class="overlay-txt">quick view</p>
        </div>
        <div class="book-category-details">
          <h3 class="book-category-title">${t.title}</h3>
          <p class="book-category-author">${t.author}</p>
        </div>
      </div>
    </li>
  `}function _(t,e){const o=document.querySelector(`.book-category[data-category="${t}"] .books-category-list`);if(o){const n=e.map((s,l)=>w(s,l)).join("");o.innerHTML=n}}function $(){f().then(t=>{t.forEach(e=>{_(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function T(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("span");n.textContent=t.toUpperCase(),o.appendChild(n);const s=document.createElement("div");s.className="books";const l=document.createElement("ul");l.className="books-category-list",s.appendChild(l);const c=document.createElement("button");return c.id=t.replace(/\s+/g,"_"),c.classList.add("see-more"),c.textContent="SEE MORE",c.addEventListener("click",M),e.appendChild(o),e.appendChild(s),e.appendChild(c),e}function M(){window.scrollTo({top:0,behavior:"smooth"})}function x(){const t=document.querySelector(".best-sellers-list");h().then(e=>{e.forEach(o=>{const n=T(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Error loading books:",e))}document.addEventListener("DOMContentLoaded",()=>{x(),$()});const A=document.querySelector(".category-list-container");h().then(t=>t.map(e=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${e.list_name}
    </button>
  </li>`).join("")).then(t=>A.insertAdjacentHTML("afterbegin",t));const N=document.querySelector(".category-btn");N.addEventListener("click",O);function O(t){console.log(t)}window.openModal=D;const i=document.querySelector(".modal"),m=i.querySelector(".modal-body"),I=i.querySelector(".modal-close");async function D(t){q(t).then(e=>{i.setAttribute("data-book",JSON.stringify(e)),H(e),j(e._id)}).catch(e=>{B.Notify.failure("Помилка при отриманні даних про книгу:")}),i.classList.add("open"),document.body.style.overflow="hidden"}const p=function(){i.classList.remove("open"),document.body.style.overflow=""};I.addEventListener("click",p);m.addEventListener("click",function(t){t.target===m&&p()});document.addEventListener("keydown",function(t){t.key==="Escape"&&p()});const L=function(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(i.getAttribute("data-book"));e.some(s=>s._id===o._id)?e=e.filter(s=>s._id!==o._id):e.push(o),localStorage.setItem("shoppingList",JSON.stringify(e)),S(e)},r=i.querySelector(".add-to-list"),b=i.querySelector(".under-btn-text");r.addEventListener("click",L);function S(t){const e=JSON.parse(i.getAttribute("data-book"));if(!e)return!1;const o=t.some(n=>n._id===e._id);return o?(r.textContent="Remove from the shopping list",b.style.display="block",r.addEventListener("click",L)):(r.textContent="Add to shopping list",b.style.display="none"),o}const J=JSON.parse(localStorage.getItem("shoppingList"))||[];S(J);function H(t){var y,g;const e=document.querySelector(".book-cover"),o=document.querySelector(".book-title"),n=document.querySelector(".book-author"),s=document.querySelector(".book-description"),l=document.querySelector(".marketplace-logo.amazon"),c=document.querySelector(".marketplace-logo.apple-books");e.src=t.book_image,e.alt=t.title,o.textContent=t.title,n.textContent=t.author,s.textContent=t.description||"No description available",l.href=((y=t.buy_links.find(d=>d.name==="Amazon"))==null?void 0:y.url)||"",c.href=((g=t.buy_links.find(d=>d.name==="Apple Books"))==null?void 0:g.url)||""}function j(t){return(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(o=>o._id===t)}const z=document.querySelector(".category-list-container"),u=document.querySelector(".best-sellers-list"),k=document.querySelector(".bestselllersTitle");z.addEventListener("click",R);function R(t){const e=t.target.textContent.trim();v(e).then(o=>{C(o),E(o[0].list_name)}).catch(o=>{console.error("Error loading books:",o)})}function C(t){u.innerHTML="",t.forEach(e=>{u.innerHTML+=U(e)}),u.classList.add("books-list")}function U({title:t,author:e,book_image:o,_id:n}){return`<div class="book-category">
             <div class="books">
               <ul class="books-category-list">
                 <li id="${n}" class="listener" onclick="openModal('${n}')">
                   <div class="book-category-card mobile-visible tablet-visible">
                    <div class="overlay-div">
                      <img class='bookByCategory-img' src="${o}" alt="${t}" />
                      <p class="overlay-txt">quick view</p>
                    </div> 
                    <div class="book-category-details">
                       <h3 class="book-category-title">${t}</h3>
                       <p class="book-category-author">${e}</p>
                     </div>
                   </div>
                 </li>
               </ul>
             </div>
           </div>`}function E(t){k.textContent=t,V(k)}function V(t){let e=t.textContent.trim().split(" ");if(e.length>1){let o=e.pop();t.innerHTML=e.join(" ")+' <span class="last-word">'+o+"</span>"}}function W(t){v(t).then(e=>{C(e),E(e[0].list_name)}).catch(e=>{console.error("Error loading books:",e)})}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",function(t){t.target.classList.contains("see-more")&&W(t.target.id.replace(/_/g," "))})});window.onscroll=function(){F()};function F(){const t=document.querySelector(".scrollup");document.body.scrollTop>500||document.documentElement.scrollTop>500?t.style.display="block":t.style.display="none"}function P(){window.scrollTo({top:0,behavior:"smooth"})}const G=document.querySelector(".scrollup");G.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
