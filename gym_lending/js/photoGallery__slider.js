$(document).ready(function () {

  $('.gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    appendArrows: $('.gallery__slider-nav'),
    prevArrow: '<div class="prev"><img src="img/arrow-prev.svg" alt="prev"></div>',
    nextArrow: '<div class="next"><img src="img/arrow-next.svg" alt="next"></div>',
  });
});




