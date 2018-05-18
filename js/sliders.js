$(document).ready(function() {
	$('.hero-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><span class="arrow prev"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="arrow next"></span></button>'
	});

	$('.video-slider').slick({
		prevArrow: '',
		nextArrow: '<button type="button" class="slick-next"><img src="img/ArrowRight--Black.png" alt="Arrow Right" class="arrow"></img</button>'
	});
});