const foundationList = document.querySelector(".foundations-list");

const foundations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: "../img/supports logo/support_9.png",
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: "../img/supports logo/support_1.png",
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: "../img/supports logo/support_2.png",
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: "../img/supports logo/support_3.png",
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: "../img/supports logo/support_4.png",
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: "../img/supports logo/support_5.png",
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: "../img/supports logo/support_6.png",
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: "../img/supports logo/support_7.png",
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: "../img/supports logo/support_8.png"
    },
];
const Murkup = foundations.map((elem, index, arr) => ` <li class="support-foundation">
      <span>0${index + 1}</span>
     <a href="${elem.url}"> <img class="foundation-logo" src="${elem.img}" alt="${elem.title}"></a>
    </li>`).join("");
foundationList.insertAdjacentHTML("afterbegin", Murkup);

const supportBtn = document.querySelector(".support-slider-button");
supportBtn.addEventListener('click', handlerSupport);
let up = false;
function handlerSupport() {
    if (!up) {
        foundationList.scrollBy(0, 60); 
        console.log(foundationList.scrollTop + foundationList.offsetHeight);
        console.log(foundationList.scrollHeight);
        if (foundationList.scrollTop + foundationList.offsetHeight >= foundationList.scrollHeight) {
            supportBtn.innerHTML = ``
            up = true;
            return;
        }
    }
  
    if (up) {
        foundationList.scrollBy(0, -60);
        if (foundationList.scrollTop === 0) {
            supportBtn.innerHTML = ``
            up = false; 
            return;
    }
  }
}
