let topScroll = document.querySelector('.upScroll img');
let bottomScroll = document.querySelector('.downScroll');

let infoBlock = document.querySelector('.staff-discription');


topScroll.addEventListener('click', () => {
    infoBlock.scrollTop += -15;
});

bottomScroll.addEventListener('click', () => {
    infoBlock.scrollTop += 15;
});


