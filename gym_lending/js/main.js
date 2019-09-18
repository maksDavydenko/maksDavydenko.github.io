const closeBtn = document.querySelector('#closeBtn');
let popup = document.querySelector('.popup');
const body = document.querySelector('body');
let header = document.querySelector('.header');
let siteNav = document.querySelector('.siteNav');
let start = false;

let btnSignIn = document.querySelector('.btn-signIn');
closeBtn.addEventListener('click', () => {
    popup.style.top = '-999px';
});

btnSignIn.addEventListener('click', () => {
    popup.style.top = '70px';
});


window.addEventListener('scroll', () => {
    let rect = siteNav.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    if (!isVisible) {
        header.style.display = 'block';
    }
    else {
        header.style.display = 'none';
    }
});

