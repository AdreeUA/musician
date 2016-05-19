(function () {
	const burger = document.getElementById('burgerButton');
	const nav = document.getElementById('navigation');

	burger.addEventListener('click', (e) => {
		e.preventDefault();
		nav.classList.toggle('nav_open');
		burger.classList.toggle('header__burger_open');
	});

	$(document).ready(function () {
		$('.nav').on('click', 'a', function (event) {
			// отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			// забираем идентификатор бока с атрибута href
			const id = $(this).attr('href'),

				// узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;

			// анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top
			}, 1500);
		});
	});

})();
