import"./assets/mobMenu-c4038008.js";import{a as r,N as C}from"./assets/vendor-77e6b4aa.js";r.defaults.baseURL="https://books-backend.p.goit.global/";async function k(){return(await r.get("/books/category-list")).data}async function g(){return(await r.get("/books/top-books")).data}async function f(t){return(await r.get(`/books/category?category=${t}`)).data}async function S(t){return(await r.get(`/books/${t}`)).data}g();function E(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"",l=e===4?"lastBooktemp":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${o} ${n} ${s} ${l}">
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
  `}function B(t,e){const o=document.querySelector(`.book-category[data-category="${t}"]`);if(o){const n=o.querySelector(".mask"),s=e.map((a,c)=>E(a,c)).join(""),l=o.querySelector(".books-category-list");l.innerHTML=s,n.style.display="none"}}function q(){g().then(t=>{t.forEach(e=>{B(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function w(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("div");n.className="mask",n.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=t.toUpperCase(),o.appendChild(s);const l=document.createElement("div");l.className="books";const a=document.createElement("ul");a.className="books-category-list",l.appendChild(a);const c=document.createElement("button");return c.id=t.replace(/\s+/g,"_"),c.classList.add("see-more"),c.textContent="SEE MORE",c.addEventListener("click",T),e.appendChild(o),e.appendChild(n),e.appendChild(l),e.appendChild(c),e}function T(){window.scrollTo({top:0,behavior:"smooth"})}function $(){const t=document.querySelector(".best-sellers-list");k().then(e=>{e.forEach(o=>{const n=w(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Error loading books:",e))}document.addEventListener("DOMContentLoaded",()=>{$(),q()});const M=document.querySelector(".category-list-container");k().then(t=>t.map(e=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${e.list_name}
    </button>
  </li>`).join("")).then(t=>M.insertAdjacentHTML("afterbegin",t));const _=document.querySelector(".category-btn");_.addEventListener("click",x);function x(t){console.log(t)}window.openModal=N;const i=document.querySelector(".modal"),m=i.querySelector(".modal-body"),A=i.querySelector(".modal-close");async function N(t){try{const e=await S(t);i.setAttribute("data-book",JSON.stringify(e)),O(e),i.classList.add("open"),document.body.style.overflow="hidden"}catch{C.Notify.failure("error")}}const p=function(){i.classList.remove("open"),document.body.style.overflow=""};A.addEventListener("click",p);m.addEventListener("click",function(t){t.target===m&&p()});document.addEventListener("keydown",function(t){t.key==="Escape"&&p()});const h=i.querySelector(".add-to-list"),D=i.querySelector(".under-btn-text");function H(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(i.getAttribute("data-book")),n=e.some(s=>s._id===o._id);n?e=e.filter(s=>s._id!==o._id):e.push(o),console.log(n),localStorage.setItem("shoppingList",JSON.stringify(e)),j(!n)}h.addEventListener("click",H);function O(t){var c,y;const e=document.querySelector(".book-cover"),o=document.querySelector(".book-title"),n=document.querySelector(".book-author"),s=document.querySelector(".book-description"),l=document.querySelector(".marketplace-logo.amazon"),a=document.querySelector(".marketplace-logo.apple-books");e.src=t.book_image,e.alt=t.title,o.textContent=t.title,n.textContent=t.author,s.textContent=t.description||"No description available",l.href=((c=t.buy_links.find(d=>d.name==="Amazon"))==null?void 0:c.url)||"",a.href=((y=t.buy_links.find(d=>d.name==="Apple Books"))==null?void 0:y.url)||""}function j(t){const e=t?"Remove from the shopping list":"Add to shopping list";h.textContent=e,D.style.display=t?"block":"none"}const z=document.querySelector(".category-list-container"),u=document.querySelector(".best-sellers-list"),b=document.querySelector(".bestselllersTitle");z.addEventListener("click",J);function J(t){const e=t.target.textContent.trim();f(e).then(o=>{v(o),L(o[0].list_name)}).catch(o=>{console.error("Error loading books:",o)})}function v(t){u.innerHTML="",t.forEach(e=>{u.innerHTML+=I(e)}),u.classList.add("books-list")}function I({title:t,author:e,book_image:o,_id:n}){return`<div class="book-category">
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
           </div>`}function L(t){b.textContent=t,R(b)}function R(t){let e=t.textContent.trim().split(" ");if(e.length>1){let o=e.pop();t.innerHTML=e.join(" ")+' <span class="last-word">'+o+"</span>"}}function U(t){f(t).then(e=>{v(e),L(e[0].list_name)}).catch(e=>{console.error("Error loading books:",e)})}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",function(t){t.target.classList.contains("see-more")&&U(t.target.id.replace(/_/g," "))})});window.onscroll=function(){V()};function V(){const t=document.querySelector(".scrollup");document.body.scrollTop>500||document.documentElement.scrollTop>500?t.style.display="block":t.style.display="none"}function W(){window.scrollTo({top:0,behavior:"smooth"})}const F=document.querySelector(".scrollup");F.addEventListener("click",W);
//# sourceMappingURL=commonHelpers.js.map
