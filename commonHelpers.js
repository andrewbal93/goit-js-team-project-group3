import"./assets/mobMenu-980dfdaa.js";import{a as r,N as B}from"./assets/vendor-77e6b4aa.js";r.defaults.baseURL="https://books-backend.p.goit.global/";async function h(){return(await r.get("/books/category-list")).data}async function f(){return(await r.get("/books/top-books")).data}async function v(t){return(await r.get(`/books/category?category=${t}`)).data}async function q(t){return(await r.get(`/books/${t}`)).data}f();function w(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"";return`

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
  `}function T(t,e){const o=document.querySelector(`.book-category[data-category="${t}"]`);if(o){const n=o.querySelector(".mask"),s=e.map((a,i)=>w(a,i)).join(""),l=o.querySelector(".books-category-list");l.innerHTML=s,n.style.display="none"}}function _(){f().then(t=>{t.forEach(e=>{T(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function $(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("div");n.className="mask",n.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=t.toUpperCase(),o.appendChild(s);const l=document.createElement("div");l.className="books";const a=document.createElement("ul");a.className="books-category-list",l.appendChild(a);const i=document.createElement("button");return i.id=t.replace(/\s+/g,"_"),i.classList.add("see-more"),i.textContent="SEE MORE",i.addEventListener("click",M),e.appendChild(o),e.appendChild(n),e.appendChild(l),e.appendChild(i),e}function M(){window.scrollTo({top:0,behavior:"smooth"})}function x(){const t=document.querySelector(".best-sellers-list");h().then(e=>{e.forEach(o=>{const n=$(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Error loading books:",e))}document.addEventListener("DOMContentLoaded",()=>{x(),_()});const A=document.querySelector(".category-list-container");h().then(t=>t.map(e=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${e.list_name}
    </button>
  </li>`).join("")).then(t=>A.insertAdjacentHTML("afterbegin",t));const N=document.querySelector(".category-btn");N.addEventListener("click",O);function O(t){console.log(t)}window.openModal=I;const c=document.querySelector(".modal"),g=c.querySelector(".modal-body"),D=c.querySelector(".modal-close");async function I(t){q(t).then(e=>{c.setAttribute("data-book",JSON.stringify(e)),J(e),j(e._id)}).catch(e=>{B.Notify.failure("Помилка при отриманні даних про книгу:")}),c.classList.add("open"),document.body.style.overflow="hidden"}const y=function(){c.classList.remove("open"),document.body.style.overflow=""};D.addEventListener("click",y);g.addEventListener("click",function(t){t.target===g&&y()});document.addEventListener("keydown",function(t){t.key==="Escape"&&y()});const L=function(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(c.getAttribute("data-book"));e.some(s=>s._id===o._id)?e=e.filter(s=>s._id!==o._id):e.push(o),localStorage.setItem("shoppingList",JSON.stringify(e)),S(e)},d=c.querySelector(".add-to-list"),b=c.querySelector(".under-btn-text");d.addEventListener("click",L);function S(t){const e=JSON.parse(c.getAttribute("data-book"));if(!e)return!1;const o=t.some(n=>n._id===e._id);return o?(d.textContent="Remove from the shopping list",b.style.display="block",d.addEventListener("click",L)):(d.textContent="Add to shopping list",b.style.display="none"),o}const H=JSON.parse(localStorage.getItem("shoppingList"))||[];S(H);function J(t){var i,m;const e=document.querySelector(".book-cover"),o=document.querySelector(".book-title"),n=document.querySelector(".book-author"),s=document.querySelector(".book-description"),l=document.querySelector(".marketplace-logo.amazon"),a=document.querySelector(".marketplace-logo.apple-books");e.src=t.book_image,e.alt=t.title,o.textContent=t.title,n.textContent=t.author,s.textContent=t.description||"No description available",l.href=((i=t.buy_links.find(u=>u.name==="Amazon"))==null?void 0:i.url)||"",a.href=((m=t.buy_links.find(u=>u.name==="Apple Books"))==null?void 0:m.url)||""}function j(t){return(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(o=>o._id===t)}const z=document.querySelector(".category-list-container"),p=document.querySelector(".best-sellers-list"),k=document.querySelector(".bestselllersTitle");z.addEventListener("click",R);function R(t){const e=t.target.textContent.trim();v(e).then(o=>{C(o),E(o[0].list_name)}).catch(o=>{console.error("Error loading books:",o)})}function C(t){p.innerHTML="",t.forEach(e=>{p.innerHTML+=U(e)}),p.classList.add("books-list")}function U({title:t,author:e,book_image:o,_id:n}){return`<div class="book-category">
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
