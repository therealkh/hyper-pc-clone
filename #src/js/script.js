document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu-block');
	document.addEventListener('click', (event) => {
		//console.log(event.target);
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

	//document.addEventListener('mouseover', (event) => {
	//	if (event.target.classList.contains('drop-down')) {
	//		const drop_down = event.target;
	//		const sub_sub_menu = drop_down.querySelector('.sub-sub-menu');
	//		console.log(sub_sub_menu);
	//		const dd_top = drop_down.getBoundingClientRect().top;
	//		console.log(dd_top);
	//	}
	//})

	window.addEventListener('resize', (event) => {
		width = event.target.innerWidth;
		if (width > 1080) {
			menu.style.display = 'block';
		} else if (width == 1080) {
			menu.classList.remove('active');
		}
	});


	//burger.addEventListener('click', () => {
	//	burger.classList.toggle('active');
	//	if (burger.classList.contains('active')) {
	//		menu.classList.add('active');
	//	} else {
	//		menu.classList.remove('active');
	//	}
	//});
})