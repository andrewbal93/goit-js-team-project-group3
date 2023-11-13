const foundationList = document.querySelector(".foundations-list");

const foundations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: "./img/supports logo/support_9.png",
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: "./img/supports logo/support_1.png",
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: "./img/supports logo/support_2.png",
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: "./img/supports logo/support_3.png",
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: "./img/supports logo/support_4.png",
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: "./img/supports logo/support_5.png",
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: "./img/supports logo/support_6.png",
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: "./img/supports logo/support_7.png",
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: "./img/supports logo/support_8.png"
    },
];
const Murkup = foundations.map((elem, index, arr) => ` <li class="support-foundation">
      <span>0${index + 1}</span>
     <a href="${elem.url}" target="_blank"> <img class="foundation-logo" src="${elem.img}" alt="${elem.title}"></a>
    </li>`).join("");
foundationList.insertAdjacentHTML("afterbegin", Murkup);

const supportBtn = document.querySelector(".support-slider-button");
supportBtn.addEventListener('click', handlerSupport);
let up = false;
 supportBtn.innerHTML = `  <svg with="20" height="20"><use href="../img/sprite.svg#icon-down-arrow"></use></svg>`;
function handlerSupport() {
    if (!up) {
        foundationList.scrollBy(0, 300);
        if (foundationList.scrollTop + foundationList.offsetHeight >= foundationList.scrollHeight) {
            supportBtn.innerHTML = `  <svg with="20" height="20"><use href="../img/sprite.svg#icon-up-arrow"></use></svg>`;
            up = true;
            return;
        }
    }
  
    if (up) {
        foundationList.scrollBy(0, -300);
        if (foundationList.scrollTop === 0) {
            supportBtn.innerHTML = `  <svg with="20" height="20"><use href="../img/sprite.svg#icon-down-arrow"></use></svg>`;
            up = false;
            return;
    }
  }
}


// const foundationList = document.querySelector(".foundations-list");

// const foundations = [
//     {
//         title: 'Save the Children',
//         url:
//             'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//         img: "../img/supports logo/support_9.png",
//     },
//     {
//         title: 'Project HOPE',
//         url: 'https://www.projecthope.org/country/ukraine/',
//         img: "../img/supports logo/support_1.png",
//     },
//     {
//         title: 'UNITED24',
//         url: 'https://u24.gov.ua/uk',
//         img: "../img/supports logo/support_2.png",
//     },
//     {
//         title: 'International Medical Corps',
//         url: 'https://internationalmedicalcorps.org/country/ukraine/',
//         img: "../img/supports logo/support_3.png",
//     },
//     {
//         title: 'Medicins Sans Frontieres',
//         url: 'https://www.msf.org/ukraine',
//         img: "../img/supports logo/support_4.png",
//     },
//     {
//         title: 'RAZOM',
//         url: 'https://www.razomforukraine.org/',
//         img: "../img/supports logo/support_5.png",
//     },
//     {
//         title: 'Action against hunger',
//         url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//         img: "../img/supports logo/support_6.png",
//     },
//     {
//         title: 'World vision',
//         url: 'https://www.wvi.org/emergencies/ukraine',
//         img: "../img/supports logo/support_7.png",
//     },
//     {
//         title: 'Serhiy Prytula Charity Foundation',
//         url: 'https://prytulafoundation.org/en',
//         img: "../img/supports logo/support_8.png"
//     },
// ];

// function updateList() {
//   const updatedMarkup = foundations.map((elem, index) => ` 
//     <li class="support-foundation">
//       <span>0${index + 1}</span>
//       <a href="${elem.url}"><img class="foundation-logo" src="${elem.img}" alt="${elem.title}"></a>
//     </li>`).join("");

//   foundationList.innerHTML = updatedMarkup;
// }

// function rearrangeFoundations() {
//   // Перемещаем половину элементов в начало массива
//   foundations.unshift(...foundations.splice(Math.floor(foundations.length / 2)));

//   // Обновляем список после изменения массива
//   updateList();
// }

// const supportBtn = document.querySelector(".support-slider-button");
// supportBtn.addEventListener('click', handlerSupport);
// let up = false;

// supportBtn.innerHTML = `  <svg width="20" height="20"><use href="../img/sprite.svg#icon-down-arrow"></use></svg>`;

// function handlerSupport() {
//   rearrangeFoundations();

//   // Обновляем скролл, чтобы пользователь не заметил изменений
//   foundationList.scrollBy(0, up ? -60 : 60);

//   // Обновляем текст на кнопке
//   supportBtn.innerHTML = `  <svg width="20" height="20"><use href="../img/sprite.svg#icon-${up ? 'down' : 'up'}-arrow"></use></svg>`;

//   up = !up;
// }
