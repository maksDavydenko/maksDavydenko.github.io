$('.activitis__block').addClass('owl-carousel owl-theme owl-loaded');

$(document).ready(function(){
    $('.activitis__block').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3500,
        dots: false,
        smartSpeed: 1000,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },

            400:{
                items: 2,
            },

            600:{
                items:3,
            },

            800:{
                items:4,
            },

            1300:{
                items:5,
            }
        }
    });
  });