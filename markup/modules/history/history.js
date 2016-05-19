$(document).ready(function () {

	$('.history__list-date').slick({
		slidesToShow: 5,
		centerPadding: '100px',
		slidesToScroll: 1,
		centerMode: true,
		asNavFor: '.history__list-disc',
		focusOnSelect: true,
		arrows: false,
		responsive: [{
			breakpoint: 1080,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 780,
			settings: {
				slidesToShow: 3,
				centerPadding: '0px'
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 1
			}
		}]

	});

	$('.history__list-disc').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.history__list-date'
	});
});
