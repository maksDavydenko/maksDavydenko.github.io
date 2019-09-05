$(document).ready(function(){
    $('#slider').owlCarousel({
        loop:true, 
        margin: 150, 
        nav: true,
        autoplay:true, 
        smartSpeed: 1000, 
        dotsEach: 2,
        dotsSpeed: 500,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items: 2,
                margin: 70,
            },

            1000:{
                items:3,
                margin: 100, 
            
            },
            1600:{
                items:4,
            }
        }
    })
});

