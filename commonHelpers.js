import"./assets/mobMenu-c4038008.js";import{a as r,N as C}from"./assets/vendor-77e6b4aa.js";r.defaults.baseURL="https://books-backend.p.goit.global/";async function k(){return(await r.get("/books/category-list")).data}async function f(){return(await r.get("/books/top-books")).data}async function h(t){return(await r.get(`/books/category?category=${t}`)).data}async function E(t){return(await r.get(`/books/${t}`)).data}f();function q(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"",i=e===4?"lastBooktemp":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${o} ${n} ${s} ${i}">
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
  `}function B(t,e){const o=document.querySelector(`.book-category[data-category="${t}"]`);if(o){const n=o.querySelector(".mask"),s=e.map((l,c)=>q(l,c)).join(""),i=o.querySelector(".books-category-list");i.innerHTML=s,n.style.display="none"}}function w(){f().then(t=>{t.forEach(e=>{B(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function T(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("div");n.className="mask",n.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=t.toUpperCase(),o.appendChild(s);const i=document.createElement("div");i.className="books";const l=document.createElement("ul");l.className="books-category-list",i.appendChild(l);const c=document.createElement("button");return c.id=t.replace(/\s+/g,"_"),c.classList.add("see-more"),c.textContent="SEE MORE",c.addEventListener("click",$),e.appendChild(o),e.appendChild(n),e.appendChild(i),e.appendChild(c),e}function $(){window.scrollTo({top:0,behavior:"smooth"})}function M(){const t=document.querySelector(".best-sellers-list");k().then(e=>{e.forEach(o=>{const n=T(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Error loading books:",e))}document.addEventListener("DOMContentLoaded",()=>{M(),w()});const _=document.querySelector(".category-list-container");k().then(t=>t.map(e=>`<li class="category-list-item">
  <button class="category-btn" type="button">
    ${e.list_name}
  </button>
</li>`).join("")).then(t=>_.insertAdjacentHTML("afterbegin",t));const u=document.querySelector(".category-btn"),x=document.querySelector(".category-list");x.addEventListener("click",A);function A(t){t.target===u&&u.classList.add("category-btn-active"),u.classList.remove("category-btn-active")}window.openModal=D;const a=document.querySelector(".modal"),b=a.querySelector(".modal-body"),N=a.querySelector(".modal-close");async function D(t){try{const e=await E(t);a.setAttribute("data-book",JSON.stringify(e)),j(e),a.classList.add("open"),document.body.style.overflow="hidden"}catch{C.Notify.failure("error")}}const y=function(){a.classList.remove("open"),document.body.style.overflow=""};N.addEventListener("click",y);b.addEventListener("click",function(t){t.target===b&&y()});document.addEventListener("keydown",function(t){t.key==="Escape"&&y()});const v=a.querySelector(".add-to-list"),H=a.querySelector(".under-btn-text");function O(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(a.getAttribute("data-book")),n=e.some(s=>s._id===o._id);n?e=e.filter(s=>s._id!==o._id):e.push(o),console.log(n),localStorage.setItem("shoppingList",JSON.stringify(e)),z(!n)}v.addEventListener("click",O);function j(t){var c,m;const e=document.querySelector(".book-cover"),o=document.querySelector(".book-title"),n=document.querySelector(".book-author"),s=document.querySelector(".book-description"),i=document.querySelector(".marketplace-logo.amazon"),l=document.querySelector(".marketplace-logo.apple-books");e.src=t.book_image,e.alt=t.title,o.textContent=t.title,n.textContent=t.author,s.textContent=t.description||"No description available",i.href=((c=t.buy_links.find(d=>d.name==="Amazon"))==null?void 0:c.url)||"",l.href=((m=t.buy_links.find(d=>d.name==="Apple Books"))==null?void 0:m.url)||""}function z(t){const e=t?"Remove from the shopping list":"Add to shopping list";v.textContent=e,H.style.display=t?"block":"none"}const J=document.querySelector(".category-list-container"),p=document.querySelector(".best-sellers-list"),g=document.querySelector(".bestselllersTitle");J.addEventListener("click",I);function I(t){const e=t.target.textContent.trim();h(e).then(o=>{L(o),S(o[0].list_name)}).catch(o=>{console.error("Error loading books:",o)})}function L(t){p.innerHTML="",t.forEach(e=>{p.innerHTML+=R(e)}),p.classList.add("books-list")}function R({title:t,author:e,book_image:o,_id:n}){return`<div class="book-category">
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
           </div>`}function S(t){g.textContent=t,U(g)}function U(t){let e=t.textContent.trim().split(" ");if(e.length>1){let o=e.pop();t.innerHTML=e.join(" ")+' <span class="last-word">'+o+"</span>"}}function V(t){h(t).then(e=>{L(e),S(e[0].list_name)}).catch(e=>{console.error("Error loading books:",e)})}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",function(t){t.target.classList.contains("see-more")&&V(t.target.id.replace(/_/g," "))})});window.onscroll=function(){W()};function W(){const t=document.querySelector(".scrollup");document.body.scrollTop>500||document.documentElement.scrollTop>500?t.style.display="block":t.style.display="none"}function F(){window.scrollTo({top:0,behavior:"smooth"})}const P=document.querySelector(".scrollup");P.addEventListener("click",F);
//# sourceMappingURL=commonHelpers.js.map
