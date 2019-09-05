const menu = document.querySelector(".menu");
const dropDown = document.querySelector(".drop_down");


menu.addEventListener('click', () =>{
   dropDown.style.display = (dropDown.style.display === 'block') ? 'none' : 'block';
   menu.classList.toggle("menu-btn_active");
});


