const menuBtn = document.getElementById('menuToggle');
const navMenu = document.querySelector(".top-header__nav ul");

menuBtn.addEventListener('click', ()=>{
    navMenu.style.display === 'block' ?  navMenu.style.display = 'none' : navMenu.style.display = 'block';
})