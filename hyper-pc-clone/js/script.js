document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu-block');

	document.addEventListener('click', (event) => {
		console.log(event.target);
		if (event.target.closest('.burger')) {
			console.log(1);
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
			burger.classList.remove('active');
			menu.classList.remove('active');
			setTimeout(() => {
				menu.style.display = 'none';
			}, 300); //! таймаут должен совпадать с transition
		}
	})


	//burger.addEventListener('click', () => {
	//	burger.classList.toggle('active');
	//	if (burger.classList.contains('active')) {
	//		menu.classList.add('active');
	//	} else {
	//		menu.classList.remove('active');
	//	}
	//});
})