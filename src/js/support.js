
import support_1 from "../img/support_logo/support_1.png";
import support_2 from "../img/support_logo/support_2.png";
import support_3 from "../img/support_logo/support_3.png";
import support_4 from "../img/support_logo/support_4.png";
import support_5 from "../img/support_logo/support_5.png";
import support_6 from "../img/support_logo/support_6.png";
import support_7 from "../img/support_logo/support_7.png";
import support_8 from "../img/support_logo/support_8.png";
import support_9 from "../img/support_logo/support_9.png";

const foundationList = document.querySelector(".foundations-list");

const foundations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: support_1,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: support_2,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: support_3,
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: support_4,
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: support_5,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: support_6,
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: support_7,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: support_8,
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: support_9,
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
 supportBtn.innerHTML = `  <svg width="20" height="20"><use href="./img/sprite.svg#icon-down-arrow"></use></svg>`;
function handlerSupport() {
    if (!up) {
        foundationList.scrollBy(0, 300);
        if (foundationList.scrollTop + foundationList.offsetHeight >= foundationList.scrollHeight) {
            supportBtn.innerHTML = `  <svg width="20" height="20"><use href="./img/sprite.svg#icon-up-arrow"></use></svg>`;
            up = true;
            return;
        }
    }
  
    if (up) {
        foundationList.scrollBy(0, -300);
        if (foundationList.scrollTop === 0) {
            supportBtn.innerHTML = `  <svg width="20" height="20"><use href="./img/sprite.svg#icon-down-arrow"></use></svg>`;
            up = false;
            return;
    }
  }
}