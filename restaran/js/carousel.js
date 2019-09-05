$(document).ready(function(){
    $('.carousel-items').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        smartSpeed: 1000,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:2,
            
            },
            1000:{
                items:3,
            }
        }
    })
});

if ($(window).width() < '800'){
    $('.header-navigation').removeClass('fadeInRight wow animated');
}