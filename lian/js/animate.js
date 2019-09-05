
// $(document).ready(function(){
//     var show = true;
//     var countbox = "#animation";
//     // $(window).on("scroll load resize", function(){
//     // if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
//     var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
//     var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
//     var w_height = $(window).height();        // Высота окна браузера
//     var d_height = $(document).height();      // Высота всего документа
//     var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//     if((w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top + ("50px")< w_height)&&(show===true)){

//         $({numberValue: numb_start_first}).animate({numberValue: 90}, {
    
//             duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
//             easing: "linear",
            
//             step: function(val) {
            
//                 $(".count-one").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
//             }
            
//         });
    
//         $({numberValue: numb_start_second}).animate({numberValue: 95}, {
        
//             duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
//             easing: "linear",
            
//             step: function(val) {
            
//                 $(".count-two").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
//             }
    
    
    
//             // test test
    
            
            
//         });
    
//         $({numberValue: numb_start_tree}).animate({numberValue: 50}, {
        
//             duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
//             easing: "linear",
            
//             step: function(val) {
            
//                 $(".count-tree").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
//             }
    
            
//         });
    
//         $({numberValue: numb_start_four}).animate({numberValue: 85}, {
        
//             duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
//             easing: "linear",
            
//             step: function(val) {
            
//                 $(".count-four").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
//             }
   
            
//         });

       
            
//                 // двишение точки
                
//                 $('#photoshop-circles').animate({
//                     left: '100%'
//                 },3000) ;

//                 $('#branding-circles').animate({
//                     left: '95%'
//                 },3250) ;

//                 $('#photography-circles').animate({
//                     left: '50%'
//                 },3500) ;

//                 $('#web-circles').animate({
//                     left: '85%'
//                 },3750) ;


//                 // движение блока с процентами

//                 $('#percent-photoshop').animate({
//                     left: '91%'
//                 },3000) ;

//                 $('#percent-branding').animate({
//                     left: '96%'
//                 },3250) ;

//                 $('#percent-photography').animate({
//                     left: '51%'
//                 },3500) ;

//                 $('#percent-web').animate({
//                     left: '86%'
//                 },3750) ;


//                     $('#photoshop-animate').animate({
//                     width: '90%',
//                     height: '2px'
//                 },3000, 'swing'
//                 ) ;
//                 $('#branding-animate').animate({
//                     width: '95%',
//                     height: '2px'
//                 },3250, 'swing'
//                 ) ;
//                 $('#photography-animate').animate({
//                     width: '50%',
//                     height: '2px'
                    
//                 },3500, 'swing'
//                 ) ;
//                 $('#web-animate').animate({
//                     width: '85%',
//                     height: '2px'
//                 },3750, 'swing'
//                 ) ;

//                 // $('.percent-animate').each(function(){
//                 //     $(this).prop('Counter', 0).animate({
//                 //         Counter:$(this).text()
//                 //     },{
//                 //         duration: 3000,
//                 //         easing: 'swing',
//                 //         step: function(now){
//                 //             $(this).text(Math.ceil(now) +' %');
//                 //         }
//                 //     });
//                 //   });
//         //     }
//         // });
//         // $('.percent-animate').each(function(){
//         //     $(this).prop('Counter', 0).animate({
//         //         Counter:$(this).text()
//         //     },{
//         //         duration: 3000,
//         //         // easing: 'swing',
//         //         step: function(now){
//         //             $(this).text(Math.ceil(now));
          
//         //         }
//         //     });
//         //   });
//     }
// });


       


      