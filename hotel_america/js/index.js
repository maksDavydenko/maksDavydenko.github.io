const   menuBtnOpen    = document.querySelector('.menu');
        menuBtnClose   = document.querySelector('.closeBtn');
        menuNav        = document.querySelector('.top-header__nav');
        body           = document.querySelector('body');


menuBtnOpen.addEventListener('click', () => {
    menuBtnOpen.style.display = 'none';
    menuNav.style.top = '50%';
    menuBtnClose.style.display = 'block';
    body.style.overflow = 'hidden';
});

menuBtnClose.addEventListener('click', () => {
    menuBtnOpen.style.display = 'block';
    menuNav.style.top = '-100%';
    menuBtnClose.style.display = 'none';
    body.style.overflow = '';
});