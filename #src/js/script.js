$(document).ready(function () {
	$('.main-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 6500,
	});
});




document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu-block');
	document.addEventListener('click', (event) => {
		if (event.target.closest('.burger')) {
			burger.classList.toggle('active');
			if (burger.classList.contains('active')) {
				menu.style.display = 'block';
				setTimeout(() => {
					menu.classList.add('active');
				}, 1); //* чтобы анимация появления не слетала
			} else {
				menu.classList.remove('active');
				setTimeout(() => {
					menu.style.display = 'none';
				}, 300);
			}
		} else if (burger.classList.contains('active') && event.target !== menu) {
			event.preventDefault();
			burger.classList.remove('active');
			menu.classList.remove('active');
			setTimeout(() => {
				menu.style.display = 'none';
			}, 300); //! таймаут должен совпадать с transition
		}
	});

	window.addEventListener('resize', (event) => {
		width = event.target.innerWidth;
		if (width > 1080) {
			menu.style.display = 'block';
		} else if (width == 1080) {
			menu.classList.remove('active');
		}
	});
})