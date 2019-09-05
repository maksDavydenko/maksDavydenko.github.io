$( document ).ready(function(){
        $(".burger-icon").on('click', function(){
            $("#adaptive-menu").slideToggle();
            $('body').toggleClass('adaptive-page');
        });
        

        $(".search-icon").on('click', function(){
            $(".search-header").slideToggle();
            $(".menu-item").slideToggle();
            $(".adaptive-navigation a").on('click', function(){
                location.reload();
            });
        
        });

        $(".search-icon-adaptive").on('click', function(){
        $(".adaptive-search").slideToggle();
    });
    
    
});