
    $(function () {
        var jqBar = $('#animation');
        var jqBarStatus = true;
        var scrollEvent = ( $(window).scrollTop() < (jqBar.position().top) );
        if (scrollEvent && jqBarStatus) { 
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
                },3000) ;

                $('#percent-photography').animate({
                    left: '51%'
                },3000) ;

                $('#percent-web').animate({
                    left: '86%'
                },3000) ;


                    $('#photoshop-animate').animate({
                    width: '90%',
                   
                },3000, 'swing'
                ) ;
                $('#branding-animate').animate({
                    width: '95%',
                 
                },3000, 'swing'
                ) ;
                $('#photography-animate').animate({
                    width: '50%',
                    
                    
                },3000, 'swing'
                ) ;
                $('#web-animate').animate({
                    width: '85%',
                   
                },3000, 'swing'
                ) ;
                
            }
        });
   
