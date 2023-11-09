const foundationList = document.querySelector(".foundations-list");

const foundations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: null,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: null,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: null,
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: null,
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: null,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: null,
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: null,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: null,
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: null,
    },
];
const Murkup = foundations.map((elem, index, arr) => ` <li class="support-list">
      <span>0${index + 1}</span>
     <a href="${elem.url}"> <img src="${elem.img}" alt="${elem.title}"></a>
    </li>`).join("");
foundationList.insertAdjacentHTML("afterbegin", Murkup);