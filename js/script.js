/* Бургер меню*/
$(function(){
 $('.menu-btn').on('click', function() {
 	$(this).toggleClass('menu-btn_active');
  $('.open-menu').slideToggle(300, function(){
   if( $(this).css('display') === "none"){
       $(this).removeAttr('style');
   }
  });
 });
});

/* Сортировка товаров */
$(function(){
 $('.grid-view').on('click', function() {
  $(this).toggleClass('active');
  $('.list-view').toggleClass('active');
 });
});
$(function(){
 $('.list-view').on('click', function() {
  $(this).toggleClass('active');
  $('.grid-view').toggleClass('active');
 });
});

$(function(){
 $('.sorting').on('click', function() {
  $('.sorting.active').removeClass('active');
  $(this).toggleClass('active');
 });
});


/* Выбор цвета */
$(function(){
 $('.color-product').on('click', function() {
  $('.color-product.active').removeClass('active');
  $(this).toggleClass('active');
 });
});


$(document).ready(function() {
	var owl = $('.popular-goods-slider');
    	owl.owlCarousel({
		margin:10,
		nav: true,
    dots: true,
		loop: true,
		responsive:{ 
			0:{
            items:1
         	},
			768 :{
          		items:2
        	},
			 992:{
          		items:3
        	},
			1200:{
          		items:4
        	}

		}
	})
})

$(document).ready(function() {
  var owl = $('.other-news-slider');
      owl.owlCarousel({
    margin:20,
    nav: true,
    loop: true,
    dots: true,
    responsive:{ 

      0:{
            items:1
          },
      1200:{
            items:2
          }
    }
  })
})

$(document).ready(function() {
  $('.popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#call',

    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#call';
        }
      }
    }
  });
});

$(document).ready(function() {
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
  
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});
