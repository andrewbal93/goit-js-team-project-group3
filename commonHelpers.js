/* empty css                      */import{a as u}from"./assets/vendor-26fe51b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();u.defaults.baseURL="https://books-backend.p.goit.global/";async function m(){return(await u.get("/books/category-list")).data}async function h(){return(await u.get("/books/top-books")).data}async function y(e){return(await u.get(`/books/${e}`)).data}h();y();window.openModal=b;const r=document.querySelector(".modal");async function b(){r.classList.add("open"),document.body.style.overflow="hidden"}const L=r.querySelector(".modal-body"),v=r.querySelector(".modal-close"),g=function(){r.classList.remove("open"),document.body.style.overflow=""};v.addEventListener("click",g);L.addEventListener("click",g);document.addEventListener("keydown",function(e){e.key==="Escape"&&g()});const p=r.querySelector(".add-to-list"),k=r.querySelector(".under-btn-text");p.addEventListener("click",function(e){e.stopPropagation();let t=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=r.querySelector(".book-title").textContent;t.includes(o)?t=t.filter(n=>n!==o):t.push(o),localStorage.setItem("shoppingList",JSON.stringify(t));const s=f(t);k.style.display=s?"block":"none"});function f(e){const t=r.querySelector(".book-title").textContent,o=e.includes(t);return o?p.textContent="Remove from the shopping list":p.textContent="Add to shopping list",o}const w=JSON.parse(localStorage.getItem("shoppingList"))||[];f(w);function E(e,t){const o=t===0?"mobile-visible":"",s=t<3?"tablet-visible":"",n=t<5?"desktop-visible":"";return`

  <li id="${e._id}" class="listener" onclick="openModal('${e._id}')">
        <div class="book-category-card ${o} ${s} ${n}">

        <img class="bookByCategory-img" src="${e.book_image}" alt="${e.title}">
        <div class="book-category-details">
          <h3 class="book-category-title">${e.title}</h3>
          <p class="book-category-author">${e.author}</p>
        </div>
      </div>
    </li>
  `}function S(e,t){const o=document.querySelector(`.book-category[data-category="${e}"] .books-category-list`);if(o){const s=t.map((n,i)=>E(n,i)).join("");o.innerHTML=s}}function C(){h().then(e=>{e.forEach(t=>{S(t.list_name,t.books)})}).catch(e=>console.error("Помилка при завантаженні категорій книг:",e))}function M(e){const t=document.createElement("div");t.className="book-category",t.setAttribute("data-category",e);const o=document.createElement("div");o.className="category-title";const s=document.createElement("span");s.textContent=e.toUpperCase(),o.appendChild(s);const n=document.createElement("div");n.className="books";const i=document.createElement("ul");i.className="books-category-list",n.appendChild(i);const a=document.createElement("button");return a.className="see-more",a.textContent="SEE MORE",t.appendChild(o),t.appendChild(n),t.appendChild(a),t}function B(){const e=document.querySelector(".best-sellers-list");m().then(t=>{t.forEach(o=>{const s=M(o.list_name);e.appendChild(s)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}document.addEventListener("DOMContentLoaded",B);document.addEventListener("DOMContentLoaded",C);const $=document.querySelector(".category-list-container");m().then(e=>e.map(t=>`<li class="category-list-item">
    <button class="category-btn" type="button">
      ${t.list_name}
    </button>
  </li>`).join("")).then(e=>$.insertAdjacentHTML("afterbegin",e));const A=document.querySelector(".category-btn");A.addEventListener("click",T);function T(e){console.log(e)}document.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("theme-toggle");t.addEventListener("change",()=>{t.checked?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")});const o=document.getElementById("theme-toggle"),s=document.getElementById("theme-toggle-label");o.addEventListener("change",()=>{o.checked?(s.classList.remove("light-theme"),s.classList.add("dark-theme")):(s.classList.remove("dark-theme"),s.classList.add("light-theme"))})});function _(){var e=window.location.pathname,t=document.querySelectorAll(".nav-list li a");t.forEach(function(o){o.parentNode.classList.remove("nav-bar-active"),(o.getAttribute("href")===`..${e}`||o.getAttribute("href")===`.${e}`||o.getAttribute("href")===`${e}`)&&o.parentNode.classList.add("nav-bar-active")})}window.addEventListener("DOMContentLoaded",_);console.log("test");const c=document.querySelector(".foundations-list"),q=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/supportsLogo/support_9.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/supportsLogo/support_1.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/supportsLogo/support_2.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/supportsLogo/support_3.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/supportsLogo/support_4.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/supportsLogo/support_5.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/supportsLogo/support_6.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/supportsLogo/support_7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/supportsLogo/support_8.png"}],N=q.map((e,t,o)=>` <li class="support-foundation">
      <span>0${t+1}</span>
     <a href="${e.url}" target="_blank"> <img class="foundation-logo" src="${e.img}" alt="${e.title}"></a>
    </li>`).join("");c.insertAdjacentHTML("afterbegin",N);const d=document.querySelector(".support-slider-button");d.addEventListener("click",O);let l=!1;d.innerHTML='  <svg with="20" height="20"><use href="./img/sprite.svg#icon-down-arrow"></use></svg>';function O(){if(!l&&(c.scrollBy(0,300),c.scrollTop+c.offsetHeight>=c.scrollHeight)){d.innerHTML='  <svg with="20" height="20"><use href="./img/sprite.svg#icon-up-arrow"></use></svg>',l=!0;return}if(l&&(c.scrollBy(0,-300),c.scrollTop===0)){d.innerHTML='  <svg with="20" height="20"><use href="./img/sprite.svg#icon-down-arrow"></use></svg>',l=!1;return}}
//# sourceMappingURL=commonHelpers.js.map
