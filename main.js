$(document).ready(function(){
var altura = $('.menu').offset().top;

$(window).on('scrol', function(){
	if( $(window).scrolltop() > altura ){
		$('.menu')addclass('menu-fixed');

	}else{
		$('.menu')removeclass('menu-fixed');

	}
});
});