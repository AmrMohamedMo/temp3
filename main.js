// InputSearch
let Inputsearch = document.querySelector(`input`);
let search = document.querySelector(`.search`);
let searchMenu = document.querySelector(`.search-menu`); 
let trend = document.querySelectorAll(`.search-menu .trend`); 
let AllButton = document.querySelector(`button`);
let allButton = document.querySelector(`button span`);
let Allbutton = document.querySelector(`button .material-symbols-outlined`);
let iconSearch = document.querySelector(`.search-icon`); 
search.style.border = `3px solid transparent`; 
Inputsearch.onfocus = function Fo() {
    search.style.border = `3px solid #ffa734`;
    search.style.borderRadius = `6px`;
};
Inputsearch.onblur = function Bl() {
    search.style.border = `3px solid transparent`;
    search.style.borderRadius = `6px`;
};
document.addEventListener(`click`, (e) => {
    e.stopPropagation();
    if (e.target === AllButton || e.target === allButton || e.target === Allbutton) {
        AllButton.classList.toggle(`active`);
    } else {
        AllButton.classList.remove(`active`);
    };
    if (e.target === iconSearch){
        iconSearch.classList.toggle(`active`);
    } else {
        iconSearch.classList.remove(`active`);
    };
});

// document.addEventListener(`click`, (e) => {
//     e.stopPropagation();
//     console.log(e.target)
// });

// let allDepart = document.querySelector(`.all-departments`);//console.log(allDepart)

// AllButton.onclick = (e) => {
//     e.stopPropagation();
//     if (e.currentTarget === AllButton) {
//         AllButton.classList.toggle(`active`);
//     } else {
//         AllButton.classList.remove(`active`);
//     };


// }


// iconSearch.onclick = (e) => {
//     e.stopPropagation();
//     if (e.currentTarget === iconSearch){
//         iconSearch.classList.toggle(`active`);
//     } else {
//         iconSearch.classList.remove(`active`);
//     };
// }




let overlay = document.querySelector(`.overlay`);               // console.log(overlay)
let deliver = document.querySelector(`.deliver`);               // console.log(deliver)
let delH3   = document.querySelector(`.deliver h3`);            // console.log(delH3)
let delImg  = document.querySelector(`.deliver img`);           // console.log(delImg)
let delSpan = document.querySelector(`.deliver span`);          // console.log(delSpan)
// location 
let loc     = document.querySelector(`.location`);
// country
let country = document.querySelector(`.country button`);        // console.log(country);
let couMenu = document.querySelector(`.country-menu`);          // console.log(couMenu);
let contris = document.querySelectorAll(`.country-menu span`);  // console.log(couMenu);
let done    = document.querySelector(`.small-container .done`); // console.log(done);
// All menu
let AllMenu = document.querySelector(`.all-search-menu`);       // console.log(AllMenu) 
let almnuSpn = document.querySelectorAll(`.all-search-menu span`) ; // console.log(almnuSpn)
// e.target
document.addEventListener(`click` , (e) => {
    e.stopPropagation();
    // Overlay Active
    if (e.target === deliver || e.target === delH3 || e.target === delImg 
        || e.target === delSpan || e.target === overlay || e.target === done) {
            overlay.classList.add(`active`);
            loc.classList.add(`active`);
    };
    if (e.target === overlay || e.target === done) {
        overlay.classList.remove(`active`);
        loc.classList.remove(`active`);
        searchMenu.classList.remove(`active`);
        }
    // click on Button To Open Menu
    if (e.target === country) {
        couMenu.classList.add(`active`);
    };
    // All menu
    if (e.target === allButton  || e.target === AllButton ||
        e.target === AllMenu    || e.target === Allbutton){
            // Add active on allbutton to open by display block
            AllMenu.classList.toggle(`active`);
            // loop on Allspans to choose s click one
            almnuSpn.forEach(span => {
                span.addEventListener(`click`, (s) => {
                    // all button width fit-content
                    // AllButton.classList.add(`fit`);
                    // Put text span in all menu
                    allButton.innerHTML = s.target.textContent;
                    // local all button menu set
                    localStorage.setItem(`my_select`, s.target.textContent);
                });
            });
            
    } else {
        AllMenu.classList.remove(`active`);
    };
    // inputSearch 
    if (e.target === Inputsearch){
        searchMenu.classList.add(`active`);
        overlay.classList.add(`active`);
    }; // Value
    trend.forEach(tre => {
        tre.onclick = (e) => {
            // e.stopPropagation();
            Inputsearch.value = e.target.textContent;
            searchMenu.classList.remove(`active`);
        };
    });

    
});

// localStorage.clear()
// Default
// // AllMenu
let getMenuSpn = localStorage.getItem(`my_select`);
if (getMenuSpn !== null) {
    // get select from local & put it in all button 
    allButton.innerHTML = getMenuSpn;
};
// Country
let getCountry = localStorage.getItem(`my_country`);
if (getCountry !== null) {
    // get country from local & put it in Country button 
    country.firstChild.textContent = getCountry;
    // get country from local & put it in Deliver button
    delH3.textContent = getCountry;
};
// select conrty
contris.forEach(con => {
    con.addEventListener(`click` , (e) => {
        // Remove All Span Active
        contris.forEach(con => {con.classList.remove(`active`)});
        // Add Active on Target span        
        e.target.classList.add(`active`);   
        // put Choosed Country in Button
        country.firstChild.textContent = e.target.textContent;
        // h3
        delH3.textContent = e.target.textContent;
        // Close contry Menu                // local
        couMenu.classList.remove(`active`); localStorage.setItem(`my_country`, e.target.textContent);
        // ADd Active on Country button
        country.classList.add(`active`);
    });
});
//--------------

// language 
let language = document.querySelector(`.header .language`); // console.log(language)
// language-menu
let langMenu = document.querySelector(`.language .language-menu`); // console.log(langMenu)
// account 
let account = document.querySelector(`.account`); // console.log(account)
// account-menu 
let accMenu = document.querySelector(`.account-menu`); // console.log(accMenu)
// hover OverLAy && Menu
function mix(l,A) {
    l.onmouseenter =_=> {Add(overlay);Add(langMenu);};
    A.onmouseenter =_=> {Add(overlay);Add(accMenu);};
    l.onmouseleave =_=> {Remove(overlay);Remove(langMenu)};
    A.onmouseleave =_=> {Remove(overlay);Remove(accMenu);};
};
mix(language,account);
//-------------- let  = document.querySelector(`.`)

// Global Function

// ADd && Remove Global
function Add(e) {
    if(e !== null){
        e.classList.add(`active`);
    }
};
function Remove(e) {
    e.classList.remove(`active`);
};
function Tog(e) {
    e.classList.toggle(`active`);
};
function z(l){
    return document.querySelector(`${l}`);
};
function zA(l){
    return document.querySelectorAll(`${l}`);
};
function RvAlAv(el){
    el.forEach(function (e) {
        e.classList.remove(`active`);
    });
};
function lopAl(el){
    el.forEach((e) =>{
        e;
    });
};
// display none all childens
function noChilds(el){
    el.forEach(function (e) {
        e.style.display = `none`;
    });
};
// display none this element ((now))
function no(e){
    e.style.display = `none`;
};
// display none this element ((when on click))
function delet(e){
    e.onclick = function (e) {
        e.target.style.display = `none`;
    };
};
// if element have classlist active make it block
function bl(e){
    (e.classList.contains(`active`)) ?
        e.style.display = `block` :
        e.style.display = `none`;
};
// Active && block
function AvAB(e){
    if (! e.classList.contains(`active`)) {
        e.classList.add(`active`);e.style.display = `block`;
    } else {e.classList.remove(`active`);e.style.display = `none`;}
};
// console.log(z(`.`))
function c(e){
    console.log(e);
};
let seTimNon = function (){
    setTimeout((e) => {
        if (! closList.classList.contains(`active`)) {
            closList.style.display = `none`;
            console.log(`closList`);
        } 
    }, 2000);
};
let seTimblk = function (){
    setTimeout((e) => {
        if ( closList.classList.contains(`active`)) {
            closList.style.display = `block`;
            closList.style.opacity = `1`;
        } 
    }, 0);
};
// function crEl() {
//     return document.createElement(`div`);
// }
// crEl.classList = `sss`;
// document.body.appendChild(crEl())
// c(z(`.sss`))
// Elements.forEach(el => {
//     Element.forEach(e=>{e.classList.remove(`active`)})
//     el.currentTarget.classList.add(`active`)
// })
//------------


// Loop language-menu a
let langs = document.querySelectorAll(`.language-menu .english a.links`); // console.log(langs)
// Default local my_language
let GetLang = localStorage.getItem(`my_language`)
if (GetLang !== null){
    langs.forEach(lang => {
        if (GetLang === lang.lastElementChild.textContent){
            lang.classList.add(`active`);
        };
    });
};


// Loop language-menu a
langs.forEach(lang => {
    lang.addEventListener(`click`, (e) => {
        e.preventDefault();e.stopPropagation();
        // Active
        langs.forEach(lang => {lang.classList.remove(`active`)})
        e.currentTarget.classList.add(`active`);
        // local
        localStorage.setItem(`my_language`, e.currentTarget.lastElementChild.textContent);
    });
});

// function Active(Els) {
//     Els.forEach(lang => {
//         lang.addEventListener(`click`, (e) => {
//             e.preventDefault();e.stopPropagation();
//             Els.forEach(lang => {lang.classList.remove(`active`)})
//             e.currentTarget.classList.add(`active`);
//         });
//     });
// };
// Active(langs);
//---------------







let secMnDvs = zA(`.sec-menu div`);
// sec-menu back
z(`.main-menu-back a`).onclick = function (e) {
    e.stopPropagation();Remove(HidnCont);
};
// click on any left-menu a links && remove all active divs in sec-menu
zA(`.left-menu a`).forEach(a => {
    a.addEventListener(`click`, (e)=>{
        if (! e.currentTarget.classList.contains(`see-all`)) {
            e.stopPropagation();Add(HidnCont);RvAlAv(secMnDvs);
            Add(z(`.sec-menu .${e.currentTarget.className}`));
        };
    });
});
// -----------









// see-all
// -------

z(`.see-all.shop`).addEventListener(`click`, (e) => {
    e.stopPropagation();Tog(z(`.see-all-line.shop`));
    zA(`.see-all.shop .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list.shop`));
    (z(`.see-all-list.shop`).classList.contains(`active`))?
    z(`.see-all.shop span`).textContent = `See less` : 
    z(`.see-all.shop span`).textContent = `See all` ;
});


z(`.see-all.programs`).addEventListener(`click`, (e) => {
    e.stopPropagation();Tog(z(`.see-all-line.programs`));
    zA(`.see-all.programs .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list.programs`));
    (z(`.see-all-list.programs`).classList.contains(`active`))?
    z(`.see-all.programs span`).textContent = `See less` : 
    z(`.see-all.programs span`).textContent = `See all` ;
});


// -------------


// landing
// -----------
let n = 1,imgs;
// default
let getBack = localStorage.getItem(`my_background`);
let getWit = localStorage.getItem(`my_wit`);
if ( getBack !== null && getWit !== null) {
    z(`.landing`).style.backgroundImage = getBack;
    z(`.fa-chevron-right`).style.color = getWit;
    z(`.fa-chevron-left`).style.color = getWit;
};// right
z(`.fa-chevron-right`).onclick =(e)=>{
    n++;if(n > 7){n = 1;};ss(e);
};// left
z(`.fa-chevron-left`).onclick =(e)=>{
    n--;if(n < 1){n = 7;};ss(e);
};function ss(e){
    imgs =`url(${n}.jpg)`;
    z(`.landing`).style.backgroundImage = imgs;
    localStorage.setItem(`my_background`, imgs);
    wit(z(`.fa-chevron-right`));wit(z(`.fa-chevron-left`));
};// white
function wit(e){
    (n===6 || n===2)?e.style.color=`white`:e.style.color=`black`;
    localStorage.setItem(`my_wit`,e.style.color);
};

// ------------


// landing-box
// ------------
let prosCopy = z(`.pros-box`).cloneNode(true); //console.log(prosCopy)
// resize
window.onresize = (e) => {
    if(window.innerWidth < 1231 && window.innerWidth > 930) {
        prosCopy.style.display = `block`;
        (z(`.list-products`)).appendChild(prosCopy);
        zA(`.deals-box.three`).forEach(e=>{
            e.style.display = `none`;
        })
    } else {
        prosCopy.style.display = `none`;
        zA(`.deals-box.three`).forEach(e=>{
            e.style.display = `block`;
        })
    }
    // if(window.innerWidth < 931) {
    //     prosCopy.style.display = `none`;
    // } 
    if (window.innerWidth > 1000) {
        Add(z(`.footer-first .big-box`));
    }
    if (window.innerWidth > 1000) {
        Add(z(`.footer-logo .big-box`));
    }
    if (window.innerWidth > 1000) {
        z(`.personalized`).style.display = `block`;
        z(`.mobile`).style.display = `none`;
        
    } else {
        z(`.personalized`).style.display = `none`;
        z(`.mobile`).style.display = `block`;
    }
    searchMenu.style.width = `${Inputsearch.offsetWidth + iconSearch.offsetWidth}px`;
}
// onload
window.onload = (e) => {
    if(window.innerWidth < 1231 && window.innerWidth > 930) {
        prosCopy.style.display = `block`;
        (z(`.list-products`)).appendChild(prosCopy);
        zA(`.deals-box.three`).forEach(e=>{
            e.style.display = `none`;
        })
    } else {
        prosCopy.style.display = `none`;
        zA(`.deals-box.three`).forEach(e=>{
            e.style.display = `block`;
        })
    }
    // if(window.innerWidth < 931) {
    //     prosCopy.style.display = `none`;
    // } 
    if (window.innerWidth > 1000) {
        Add(z(`.footer-first .big-box`));
    }
    if (window.innerWidth > 1000) {
        Add(z(`.footer-logo .big-box`));
    }
    if (window.innerWidth > 1000) {
        z(`.personalized`).style.display = `block`;
        z(`.mobile`).style.display = `none`;
        
    } else {
        z(`.personalized`).style.display = `none`;
        z(`.mobile`).style.display = `block`;
    }
    // search input size width
    searchMenu.style.width = `${Inputsearch.offsetWidth + iconSearch.offsetWidth}px`;
}
// -----------------

// books-images
// ------------
zA(`.books-images`).forEach(e=>{
    e.addEventListener(`wheel`, function(e) {
        e.stopPropagation();
        if(e.wheelDelta > 0){
            this.scrollLeft -= 50;
            // Add(z(`.best-sellers-in-books .fa-chevron-left`))
        } else {
            this.scrollLeft += 50;
            // Add(z(`.best-sellers-in-books .fa-chevron-right`))
        }
        if(this.scrollLeft === 0 || this.scrollLeft > 3054){
            document.body.style.overflow = `auto`;
            // Remove(z(`.best-sellers-in-books .fa-chevron-right`))
        } 
    },{passive: true})
});
document.querySelectorAll(`.books-images img`).forEach(x=>{
    setInterval(() => {
        x.onmouseenter = function (e){
            document.body.style.overflow = `hidden`;
        }
        x.onmouseleave = function (e){
            document.body.style.overflow = `auto`;
        };
    }, 2000);
});
zA(`.books-images`).forEach(e=>{
    e.onmouseenter = function (e){
    document.body.style.overflow = `hidden`;
    Remove(this);this.classList.add(`active2`);
    };
});
zA(`.books-images`).forEach(e=>{
    e.onmouseleave = function (e){
    document.body.style.overflow = `auto`;
    this.classList.remove(`active2`);
    };
});
zA(`.best-sellers-in-books .fa-chevron-left`).forEach(e =>{
    e.onclick = function (e) {
        Add(this.previousElementSibling)
        this.previousElementSibling.classList.add(`active2`);
        this.previousElementSibling.scrollLeft -= 1000;
    };
})
zA(`.best-sellers-in-books .fa-chevron-right`).forEach(e =>{
    e.onclick = function (e) {
    Add(this.parentElement.firstElementChild.nextElementSibling);
    this.parentElement.firstElementChild.nextElementSibling.classList.add(`active2`);
    this.parentElement.firstElementChild.nextElementSibling.scrollLeft += 1000;
    };
});

// -----------------

// deliver [[after]] header
let delv_H = document.querySelector(`.header`).nextElementSibling; // console.log(delv_H)
delv_H.onclick = function (e) {
    Add(overlay);
    Add(loc);
};
// ---------------

// button search
//--------------
let mybtn = document.querySelector(`.search button`); 


// -------------




// back to top
// --------
z(`.back-to-top`).onclick = (e) =>{
    window.scrollTo({
        top: 0,
        behavior: `smooth`,
    });
};
// ----------




// ------------

// hidden-list
// --------------
let hidnLsit = document.querySelector(`.hidden-list`); // console.log(hidnLsit)
// all-menu buger
let burger = document.querySelector(`.header-menu .header-box`); // console.log(burger)
// close
let closList = document.querySelector(`.close-list`); // console.log(closList)
// burger on click
burger.onclick = function (e) {
    e.stopPropagation();
    Add(hidnLsit);Add(closList);
    overlay.classList.add(`active-list`);
    closList.classList.remove(`not-active`);
    // seTimblk();
    if (hidnLsit.classList.contains(`active`)) {
        Add(document.body);
    };
};
// Active Hidden list
let HidnCont = z(`.hidden-container`);
document.addEventListener(`click`, (e) => {
    if (e.target === closList || e.target === overlay) {
        e.stopPropagation();
        Remove(closList);Remove(hidnLsit);
        overlay.classList.remove(`active-list`);
        Remove(document.body);
        // seTimNon();
    };
});



// small burger menu in mobile 
z(`.header-box`).onclick = function (e) {
    e.stopPropagation();
    Add(hidnLsit);Add(closList);
    overlay.classList.add(`active-list`);
    closList.classList.remove(`not-active`);
    // seTimblk();
    if (hidnLsit.classList.contains(`active`)) {
        Add(document.body);
    };
};

