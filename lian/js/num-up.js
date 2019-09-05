
$(window).on('scroll', function(){

        var jqBar = $("#animation"); 
        var jqBarStatus = true;
        var numb_start_first = $(".count-one").text(); 
        var numb_start_second = $(".count-two").text();
        var numb_start_tree = $(".count-tree").text(); 
        var numb_start_four = $(".count-four").text();

            var scrollEvent = ($(window).scrollTop() > (jqBar.position().top));
           

            if ((scrollEvent && jqBarStatus) || (srollEvent_adaptive && jqBarStatus)) { 
                $('.our-skills').css('visibility', 'visible')

            $({numberValue: numb_start_first}).animate({numberValue: 90}, {
    
            duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
            easing: "linear",
            
            step: function(val) {
            
                $(".count-one").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
            }
            
        });
    
        $({numberValue: numb_start_second}).animate({numberValue: 95}, {
        
            duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
            easing: "linear",
            
            step: function(val) {
            
                $(".count-two").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
            }
    
    
    
            // test test
    
            
            
        });
    
        $({numberValue: numb_start_tree}).animate({numberValue: 50}, {
        
            duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
            easing: "linear",
            
            step: function(val) {
            
                $(".count-tree").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
            }
    
            
        });
    
        $({numberValue: numb_start_four}).animate({numberValue: 85}, {
        
            duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
            easing: "linear",
            
            step: function(val) {
            
                $(".count-four").html(Math.ceil(val)+" %") // Блок, где необходимо сделать анимацию
                
            }
   
            
        });


                // двишение точки
                
                $('#photoshop-circles').animate({
                    left: '90%'
                },3000) ;

                $('#branding-circles').animate({
                    left: '95%'
                },3250) ;

                $('#photography-circles').animate({
                    left: '50%'
                },3500) ;

                $('#web-circles').animate({
                    left: '85%'
                },3750) ;


                // движение блока с процентами

                $('#percent-photoshop').animate({
                   left: '91%'
                },3000) ;

                $('#percent-branding').animate({
                    left: '96%'
                },3250) ;

                $('#percent-photography').animate({
                    left: '51%'
                },3500) ;

                $('#percent-web').animate({
                    left: '86%'
                },3750) ;


                    $('#photoshop-animate').animate({
                    width: '90%',
                    
                },3000, 'swing'
                ) ;
                $('#branding-animate').animate({
                    width: '95%',
                  
                },3250, 'swing'
                ) ;
                $('#photography-animate').animate({
                    width: '50%',
                  
                    
                },3500, 'swing'
                ) ;
                $('#web-animate').animate({
                    width: '85%',
                   
                },3750, 'swing'
                ) ;
                $(window).off('scroll');
                console.log(jqBar);
            }
        });
   






      