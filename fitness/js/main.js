const menu = document.getElementById("menu");
const menuLine = document.querySelector(".nav-line");
const menuItems = document.querySelector("header ul");

menu.addEventListener('click', () =>{
    menuLine.classList.toggle('active');
    menuItems.style.display = (menuItems.style.display == 'none') ? 'block' : 'none';
});

