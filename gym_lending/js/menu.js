const menuBtn = document.querySelector('.menuBtn');
const menuSlicky = document.querySelector('.menuSlicky')
const siteNavBlock = document.querySelector('.siteNav ul');
const menuCloseBtn = document.querySelector('.menuCloseBtn');
const menuSlickyBtn = document.querySelector('.menuSlicky');


menuBtn.addEventListener('click', () => {
    siteNavBlock.style.display = 'block';
    menuCloseBtn.style.display = 'block';
    menuSlickyBtn.style.display = 'none';
});

menuSlicky.addEventListener('click', () => {
    siteNavBlock.style.display = 'block';
    menuCloseBtn.style.display = 'block';
    menuSlickyBtn.style.display = 'none';
});

menuCloseBtn.addEventListener('click', () => {
    siteNavBlock.style.display = 'none';
    menuCloseBtn.style.display = 'none';
    menuSlickyBtn.style.display = 'block';
});