
$(document).ready(function(){
	$(".adaptive-menu").on('click', function(){
		$('.nav-line').toggleClass('active');
		$('body').toggleClass('adaptive-page');
		$('.header-navigation').slideToggle();
		if ($(window).width() < '800'){
			$('.header-navigation').removeClass('animated');
				}			
	})
});

