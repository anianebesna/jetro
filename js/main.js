$(function(){
  $('.slider__for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.slider__nav',
      prevArrow:  '<button class="slick-arrow slick-prev"><img src="images/slider-prev.svg" alt=""></button>',
      nextArrow:  '<button class="slick-arrow slick-next"><img src="images/slider-next.svg" alt=""></button>',
  });

  $('.slider__nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider__for',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 5,
          }
        },

        {
          breakpoint: 755,
          settings: {
            slidesToShow: 4,
          }
        },

        {
          breakpoint: 660,
          settings: {
            slidesToShow: 3,
          }
        },

        {
          breakpoint: 490,
          settings: {
            slidesToShow: 2,
          }
        },
      ]  
  });

  $('.menu__btn').on('click', function(){
    $('.nav').slideToggle();
  });
});
