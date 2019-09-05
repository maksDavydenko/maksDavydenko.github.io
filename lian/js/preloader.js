
$(document).ready(function(){

    $(".dws-progress-bar").circularProgress({
        color: "#000",
        line_width: 15,
        starting_position: 0,
        percent: 0,
        

    }).circularProgress('animate', 100, 700);
   
    var $preloader = $('#preloader');
    $preloader.delay(700).fadeOut('slow');
   


});

// $(window).on('load', function (){
//     var $preloader = $('#preloader');
//     $preloader.delay(700).fadeOut('slow');
// })