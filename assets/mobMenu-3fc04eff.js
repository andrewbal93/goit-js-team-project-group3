(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const A of e)if(A.type==="childList")for(const a of A.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const A={};return e.integrity&&(A.integrity=e.integrity),e.referrerpolicy&&(A.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?A.credentials="include":e.crossorigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function o(e){if(e.ep)return;e.ep=!0;const A=t(e);fetch(e.href,A)}})();document.addEventListener("DOMContentLoaded",n=>{const s=document.getElementById("theme-toggle");s.addEventListener("change",()=>{s.checked?document.documentElement.classList.add("dark-theme"):document.documentElement.classList.remove("dark-theme")});const t=document.getElementById("theme-toggle"),o=document.getElementById("theme-toggle-label");t.addEventListener("change",()=>{t.checked?(o.classList.remove("light-theme"),o.classList.add("dark-theme")):(o.classList.remove("dark-theme"),o.classList.add("light-theme"))})});document.addEventListener("DOMContentLoaded",n=>{const s=document.getElementById("theme-toggle"),t=document.getElementById("theme-toggle-label");localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),document.documentElement.classList.add("dark-theme"),s.checked=!0,t.classList.remove("light-theme"),t.classList.add("dark-theme")),s.addEventListener("change",()=>{s.checked?(document.body.classList.add("dark-theme"),document.documentElement.classList.add("dark-theme"),t.classList.remove("light-theme"),t.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),document.documentElement.classList.remove("dark-theme"),t.classList.remove("dark-theme"),t.classList.add("light-theme"),localStorage.setItem("theme","light"))})});function p(){var n=window.location.pathname,s=document.querySelectorAll(".nav-list li a"),t=document.querySelector(".home"),o=document.querySelector(".shopping-list");s.forEach(function(e){t.classList.remove("nav-bar-active"),o.classList.remove("nav-bar-active"),`${n}`=="/goit-js-team-project-group3/shoping-list.html"?(o.classList.add("nav-bar-active"),t.classList.remove("nav-bar-active")):(e.parentNode.classList.remove("nav-bar-active"),t.classList.add("nav-bar-active"))})}window.addEventListener("DOMContentLoaded",p);const m="data:image/png;base64,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",h="data:image/png;base64,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",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAPCAYAAADtX41qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUASURBVHgB7Zl3iB1VGMVP1GgsG1vWSowFFRWxBFTUGDViQY2KNRJEUYz+EY0tVsIDBSuCorGBDRVR7B0UEY0FC7FLjIKouCZietskuzkn3528t7P3uzOvQDbhHfix782dmXdn7lfvDkJb64u2I6PJkWQk2Y1sTYaQHrKYzCIzyKfkI/I5WZ645yByJtkfab1LPsu+bBT+bpO4YBFZFvmxoWRD55ol4d6D4Wsp7EHz9+1AdV6xueg3hzjjKwLeeCOaT7YgG6BxrYTNfSgaUzfsXfVExjSvc0mF7OVcr3fWEdiDnBTm9A65nvzk3HcymUI2RVpzETGqDxMX3ELeyB3rJM/CvCOvXnIbOZYcAV96kMvIvJpjm5FHyT7ONXfBXtzpzrg8T554AVqna8mNZFs0rm/IQ+QxNCYZlaKMnu/9cL/M0fWO74OtST2SoZ1CNifHoa/ByqD0zBX4Dl6o3gTjI+cPJ13O+ZrchTAv6C3gTZj3ZNLnrxLnX0meSYy/Te4u8bv1cD75t8l7fEDGtGg+ilivwbKLFvwt5zwZ3bcwI5xGZifW65CaNZBBVWBpMX/uXOceVyF3g7Wpk8nDsPTSVjkpFZ0Ki3yqmfaNnDMHFoWOImPJ8eRo8l/kXJUcu4bPil5KeTegf4R6nDyJEmo4tLVQigQKweOx7kl14T3oXxvm9SeshvGkeuv/3DEtsKJRrD6UIchoVJaoDOnIjf8Di05y1gPJMYFY7axIMzP83u2wbLBxzbgi3v2w6HUzSmggGJV0GszzpqB5vUJ+jhzXy53oXKMXpxpiQWTsF/jSQmjhep3xW1Htrg6Hr9/JCbD0kklroyj0PKqRpFaqPw8g19UcUxRT56ca6bkwPgJmhDFp3kqfP5A7yCT0t4kHYQZV5Dh9Ji4pr3qpMFagyjM2ga8epKUapTP3m+fAvLKo0yjS17CWOa+z4BuVOsYXyV+RsR3hS93tpMS4PD/VsmfS4irqLckd/wIWjbx5Dw9/FVnGwRqfg5BeG0nPO528RB4gZ5Cr0d8GFEG3JHeG74c599P1u4fPEzOjUtu8lXOB9ilegIVUSQs/IfxYTOpU5iEtPYxe9hWoepFejBZ+Bdqq1bDEWHcYvxdWRsS2eOTgWrsZgS8Df8NqL43LOGNBRWXJxSjWqIC0xqjk3WMSF/wKa2P1EPuRHeBLIXw60pJXan9kIbkJfcPzQEnJZaTIou2NLmdcjqeovqzgPsoGZ6Nv+tV7OBjm1J6+I1PDtbG5vQrrFGfnxoahaqzdaLGyBXwa1il4m5Wy2FEoJ9U0f5Q4TxGpAnu4S+Hn/YEsRW29u6Lo+gls/83TzuQR1CeVEDJmb89OZcS4QEoyONVTZdK0olksGqoJWVPyZEb1MmwrXrm7KB+npI5jch3nazGyPY4JWPckR9i+xHmdaK3T6L0p0quQH4zmpaL+4xLnXU4uihzXttBT2ZfMqJSGKrAUp9Ze7WfZglnh83vyOiwUL0B9Upi+BuYBl6CtlFQ4y3G1Z6TGYipaoy74KbxWXlT8DVanrVbMe5TqdiJ7kl1g/4pRajwUFsV+JO/BCj2lObXDswK10sbmCMSlnd5puWNqzdVFdMCX0oi8fm9nXPPRPzdje0LqTk50rlPo135PrG2Wc52H5rpSdZVy2LGoX1lnqGJ7Zvi7KIyNhtW4zUhO/UTJc2UDIyPH1W0X1dFttdW4VgFXKmEjGbn5wgAAAABJRU5ErkJggg==",w="/goit-js-team-project-group3/assets/support_3-5e888f19.png",Q="/goit-js-team-project-group3/assets/support_4-59a38053.png",b="data:image/png;base64,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",f="data:image/png;base64,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",v="data:image/png;base64,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",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAnCAYAAAAxQgdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4OSURBVHgB7Vl7eBzVdT/33pl9z6xkyw9Zu2thE5libMs2mNCY2jjUfAnEQB1RDNh6GJyQAuWVNn0lCl8KLR/0jwJOKkCSreKkuCnFpHYxj0/Fxq8iLBtb2PVDb0vCsrS7s7va3Zm5t2dWrKyXLZPSOPm++enbTzP33Hvm3HPOPfeecwFs2LBhw4YNGzZs2LBhw4YNGzZs2PgiIBN1UAKl6wmhxRP1E5Rs0Vqr944hFJa5FE6vZQaJC2mghZkeb1/nK53KjIoi7Uz18by8CkV3m1Mj7ZtOeWZuyKemXkRM+ai2tL9f2eOeLZtENhmdRojgHKAzCrkdPlfY50iAq+9MTbtSsG4yA2m+CaxT6yw46Q20zCVAJsWmyf8NDaDnFKYLwi21LTnTywrDLuj2czIj0lZzOqcQ3414jwq++RTAxaOxT6LRrX2WyN5A2bx4R+0nVh+hk1lWGwfzEGXMb41VCh4oIty4giRSByKRoog/1Lww0rbpYE7hoyplEaXvVE07XEawiTo4/Yv+Bi1fio9LLvoTZHc6erBx5OgSpngdlcQUaZMxnQhJNaixIh2VDrr807+Xil65S5rsvAM7/klq6o1vuYzknQTEHEL5fcpJ5ztCJpVpSTpECazlRHSiCzI3Sf8x1eFa4OJIMtYYduYuvBlpSwxGG92KtpwQvlIi5JwcM29lCjlNhVifijbWO/zFj0sp6TBhfKtHnXvAFNIqWchRSsnjgvHj4HA96fFe08CmLHExLl50eJe8LSRTFYR8G4TwGkT8D36+RHLMbWEO+D4+N3EXfYKpfR/h8ytupVjmPMHBIEtTWmMDXEbQibuI86tZiJG/CZBT6FXwCzOiXbVbYh2v1Oug4ytZqYTmPSWAXz3IUizkQI74tPhXrHdcZcuw9eMsj0Tbyx+joU+BkdqttbfsFYLLnBIR7q5tGexBBE7iaibSswnoq7W0+XS4veZNFBqNk1KyfHh2CgBvGcTxKD5OwunjLIQWbb1ihwDygUGl+cQw/0hQ8V+E6XdrLbXHgJgnwIQPnRKNWzyYU14JwqyLdL76HhX0mBPYlRhFWgWjbiBsLvwW4BKMmoVIA6EPYSi+JftDjVRdbEQYIIlaZL5pFdf4Q+WzPuezU2v75IcEaJN/piuENikiuBKYZP6+ZSAuxJtopbmcp8bZGuoNNOhR7Nc0QjKT/jzetvldbD+gMvYtb2DdfHzOMynX0EvyrDCKq30SIRJ6KAsLHZ5Hb7p1cDBhvpmn5qDxvgYOcgJl+ToRRBZE3DxaP9YLJzI6nPRNV/49M9EhrqFOOI160E2q/YIQuAt+C3AJ4bf4blw9V6FxdMHh76OdNfWp6MFT1g9pRUi7ZbAneXNM+A03Gmn1K//pYo4VwKlPlqExabDPTG1Jr+zt7SbgEDwl3oh1125z5iykaYmcApMdlSg9Bi4S5oboSmt3tsn+edE8We4OIz/mvUoTVO/Qo0e0zAS8CwdM2eg1IofDGGYPuHKL89FhCqkkqmLtdZ/JuYubhS7+wJHktZEp0T5HkvbFujYdc+Qs2EVNRxca7zOUbSaj6Z854lJEl8ShWEftv3qUaz5VXHNinDnOCpHujkpSwmmaPbHO6k9Rnl4mHEu5ntwY7ajrdvmLO2NtW05Irmt3UtnsSEUP9cNlxMQHpWDZG2i4O9Czk4KTr2tnavYMoz2OtOetZwxf5Vp7dS3YuOz4AuHXxu8KpAnoZOQTH7OyRfbARCZc9DZ+Q5CO/Lj4AbTH1PHJFNb928CcE+c8wCiwyhUd5TfPLl6epe5ubbnheK8785zUCWy8rNmZjSwkCuI7QpDF45M5BJU0ZIwKXA4qyfUwLJNZGgpnfhasBbtx+wW+kr/B4ybRyQNJFoG+16wDDvZeLkFByD/UBw+c0BEcZObv8YMvTmHA1M/3H40NsrcwPZkbnA3AQB90bB0YIqnrJ0E0GMXshUBojg/atoSH8SCQc4cfwnICYGt6BEsshIDTcIz97gYZAqYCWImAlJSG3mptsL1SQlkViPTit7aaQ3xyynIg3IPyXC+g4LQyRvS0LwVnN8Zg0sMqJlYpOPlC6jyxzAVTPFKGntHFPbkQuQP532XCuLq9zQM8TaBnZzzbNHJPFSP/yFhljuwxAuNvz/78ipUK0z+Wmate8cofqwUVa612X3DWVSqlp7EEcxD/f6QSvmXatJhbDRzNUdXkfmzfr3gcDWqw/E3/1NLZw0QgaqD8PjWQPsA47JMpe0+lXuRbOpiioAFUv9msBtoXefIWTFGF811/wfoV2dFq4f3Xq0rOIW+h9+rRsipusUmhrFHxyAeUYPkH6vSy66x2T35qPsqHstI9qls0qsGyGiV/TR7kn3Go6sDb3oBvTZaHO/DdAsVHjnjy8+cpwdZvZObG6Ed+ylqR9+HMu3PgJ+gQVPXGXlaSsbXDZVBD8ADSfzr4VimpfsdeNbh9EVwAPinvWdU541+sQs8YS6ABe9FKFZhIr87+UIGrm3rd+yy6IUh6T5f/yeH06oapm36w8wqwfk9/EBrzwWnT1nq5xJ9F8z9DGSw2BF8mQer9jGmEtT+j43PzZq6TJcJI3tfT81xcCDfWGoRTmLCOS+JGrOikhYP8KCu0Eqx4AtOQv8BCwGM8ZS5hmny9kOTbgUjHh8wOxAkiSRO91Wcw8X1BUPPpQKDEbfHgpvkY5qKvxwtbjoyWFwWSkPacSegKCnwfyOQlS/mYOGGziGE+vIoZxk34vIhIzgehqyqB8r2Egx61ypUWC4mkHkXd7ErMOHQoqMR2WHPDhbQEdatjwWWN9e5Mxf4a+WJKLiQsf4xKKynDCpkM5yfjAMHHPbD4cRWjcMsxry72hTxXZduHDkr4AUPIrh1X/9X+nuHzVIIL11kcOSf8n/ZO2f/cL7d/mCUqwdJZ5HO/EONkR2mvWyK67kUrubD+GsGm8MDwDjhTB8A5rbvm3OixJpgDiZbN3Zg2bUfFrYXFuXRS9/35hjAeEZR/L9a+uX6ocz9E4ALwGOb2AYf0fU34bvWHeDMGmCJm0iehvt4Yrz/OIpForz6jBr5TJUjqkWnTTrk1GNQxljhjWkddJ0YPSweZ6pHm8P0CVxvqiD3omn73P1vpnzDJbdDQoDdBplp41mKLY0zBWSTeXX02Bl8OuOpYRgS0oBpx/tQqtx612idKaUaH2FHv5KK1wv7TMzSMlpVYIarEkPWiJ+++/FHssUzLHvEHyv4cjWcJNeQZDkZnekKli7GsaDnVe9BQpadJygrDOZrj7DtwiejpqTuLQv4lev8TXJAfYs24xroIuPioSmqaqevQQB09PbMH9zuC9ShTuiKnsHwZ8luGy+z1TLu1H5oM50hKHLL7b7F9u3VRAf/vqMRiKVmPFniLUFGLhrzTujyxKJeep/5aGUslj3ZUvyYILUFFLJDc8ge5odKvZam4aeNCF7lY+rPqsDnDR3IBzzFOd6Fb7Y+2N//doLAM66sEDxY7RhxwlBnltyuBimcuIITQ2pv/AyfQj0r4PUL1OrgQhOWlpFwNtWxjMvkHbLHCZGZFY/xVqcQ3cy7ewU7PYNXpjewwLTeyH6MRrl7xTSeYz8JvAM5QayHq74Ykgfep5jiAoZaqSXqTRRsKv6hfD9FT32r6yQIt22aia7+07+yMcwnJsim7aVZk5bJZC4IZGv7+bEd0wYdt/gkF0Nqqd2PoX64GC182OUFFldyW+aYgOkRopRZ9tW/0GIPzEsZYCPfOjWqg8JVoB5wwZekM7mkK1nbxamzz4aHOjF9JBfnqhSWoNwgUHrAMG2l7DU/CW8bvZu3mQPYSDq+zuHysv79qKKxbIS5tpG+SmeMuTAEfwgMZHk6q9AyxCU/RobK9qJSic52bz8AlAvdeQwBWj4cBDSXjXMyJxjqFuBc5+JxAtpmetBUxA0IWD+D/HdIwZip6YJUwzi9JDH3w0PWd2QZrY/kR0sUgDeCGQIxMaNS8VQr0btMyxXixrgH3ntUjJqFgmhAdf6jWPvMtNdj8EM7+cXSKh+PJ7pMqy3uXEfYDmHTvdzHtyI780iofVPBjkY7a/ePRCJMMzaX8o5rSHvQF9ftj7fBT+L9AUNwDxTfQyX9mpVf5mJ7ETbgFbfHeyA+P3vZKGC7C1ZiKrsf6+M7M9J0wD7OBbYqyJi9j1GG3aGOVI8a8DutDMpkNucDQ3Py1IUNiv4Jg+Uli3fIIwNSCPDaY05VZQ5y4p77hD5TreKI1DOooAyOZPs+qEs9n5X+KbvS2EizcorXX7pKufPgePRWvw7SjiXgrdmWkF3Ad7mW7R35dhi8NlpayN5C4h4pg+WPo1NV4qf/vidaqrky7CRO4lhjTgZp0E5fM29SQdz+IskY8QC0iwDXJMF8738sq1ZEXUUcxYR1nCfyY4lURssuJSvyX0FGbzHQLlOxVQdlH/M41kgGkBlfkDvg1YN1GEm4JS4FycXg0vb+rrt0/c+3t2G0pmJRwRp+KtVVnrs3iKU+z3xVfJQz6+WmLQMKZ7ofONkMJzbpXjqdbrNZYW02TGlj7bdlkmVDYd/KFKKYnd0e4byFebhdhqDQJE887BxLHB/eNKoNC6aqI2xhxPYehrk6nXL3Y4Q69/ynmSnePbk+k9U+9Ei2dTCb3deC79tXYr/x7fCWegQQkPu+jE/6+g4hPYdxCCboEJ3c5B1LN8WGN4a5XW3NnbfhDI6XfiFeD001Cfu50pvb1tWcjUKXJYX0pNbg7w1Sy7rXM0/gtN+XOO6Hl1eQQM6v4Eih7kBHTCTZs2LBhw4YNGzZs2LBhw4YNGzZsfCH8L+ZJOmNEpWQZAAAAAElFTkSuQmCC",d="/goit-js-team-project-group3/assets/sprite-f71770cb.svg",r=document.querySelector(".foundations-list"),Y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:m},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:h},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:B},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:w},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:Q},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:b},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:f},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:v},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:y}],U=Y.map((n,s,t)=>` <li class="support-foundation">
      <span>0${s+1}</span>
     <a href="${n.url}" target="_blank"> <img class="foundation-logo" src="${n.img}" alt="${n.title}"></a>
    </li>`).join("");r.insertAdjacentHTML("afterbegin",U);const l=document.querySelector(".support-slider-button");l.addEventListener("click",E);let i=!1;l.innerHTML=`  <svg width="20" height="20"><use href="${d}#icon-down-arrow"></use></svg>`;function E(){if(!i&&(r.scrollBy(0,300),r.scrollTop+r.offsetHeight>=r.scrollHeight)){l.innerHTML=`  <svg width="20" height="20"><use href="${d}#icon-up-arrow"></use></svg>`,i=!0;return}if(i&&(r.scrollBy(0,-300),r.scrollTop===0)){l.innerHTML=`  <svg width="20" height="20"><use href="${d}#icon-down-arrow"></use></svg>`,i=!1;return}}localStorage.setItem("mobileMenuOpenOrNot",!1);window.openMobileWindow=L;const c=document.querySelector(".mobileMenu"),u=document.querySelector(".icon-burger-menu"),g=document.querySelector(".icon-close");function L(){localStorage.getItem("mobileMenuOpenOrNot")==="false"?(c.classList.add("openMobileMenu"),document.body.style.overflow="hidden",u.classList.add("iconHide"),g.classList.remove("iconHide"),localStorage.setItem("mobileMenuOpenOrNot","true")):(c.classList.remove("openMobileMenu"),document.body.style.overflow="",u.classList.remove("iconHide"),g.classList.add("iconHide"),localStorage.setItem("mobileMenuOpenOrNot","false"))}export{d};
//# sourceMappingURL=mobMenu-3fc04eff.js.map
