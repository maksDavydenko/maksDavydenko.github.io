window.addEventListener('DOMContentLoaded', () =>{
    
const burger_menu = document.querySelector('.burger-menu');
    burger_menu_span = document.querySelector('.burger-menu > span'),
    adaptive__menu = document.querySelector('.adaptive-navigation > ul');

    window.addEventListener("resize", function(event) {
        if(window.innerWidth > 665){
        adaptive__menu.style.left = '-999px';
        document.body.style.overflow = '';
        burger_menu_span.classList.toggle('burger-menu__span-active');
        burger_menu_span.classList.toggle('burger-menu__item');
        }
    });
   

    burger_menu.addEventListener("click", function(){
        if(document.body.style.overflow == 'hidden'){
            adaptive__menu.style.left = '-999px';
            document.body.style.overflow = '';
            
        } else{
            document.body.style.overflow = 'hidden';
            adaptive__menu.style.left = 0;
        }

        burger_menu_span.classList.toggle('burger-menu__span-active');
        burger_menu_span.classList.toggle('burger-menu__item');
    }); 
});