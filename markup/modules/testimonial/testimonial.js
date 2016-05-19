$(document).ready(function () {
	$('.testimonial__list').slick({
		slidesToShow: 1,
		centerPadding: '0',
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'testimonial__paginations',
		centerMode: true,
		prevArrow: '<span class="testimonial__arrow-left"></span>',
		nextArrow: '<span class="testimonial__arrow-right"></span>',

		responsive: [{
			breakpoint: 920,
			settings: {
				arrows: false
			}
		}]

	});
});
