$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    adaptiveHeight: true,
    prevArrow: '<div class = "slider__prev"><span class = "fa fa-angle-left"></span></div>',
    nextArrow: '<div class = "slider__next"><span class = "fa fa-angle-right"></span></div>',
  });
});