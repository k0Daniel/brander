// // Функция для проверки ширины и обновления контента
// function checkWidthAndUpdateContent() {
//     if (window.innerWidth < 1300) {
//         // Очищаем содержимое body
//         document.body.innerHTML = '';

//         // Добавляем элемент с сообщением в body
//         document.body.appendChild(message);
//     }
// }

// // При загрузке страницы проверяем ширину
// checkWidthAndUpdateContent();

// // Добавляем обработчик события на изменение размера окна
// window.addEventListener('resize', checkWidthAndUpdateContent);

document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('button_up');
	const footer = document.querySelector('.footer__bg');
	const arrowImage = button.querySelector('img');

	function checkButtonPosition() {
		const buttonRect = button.getBoundingClientRect();
		const footerRect = footer.getBoundingClientRect();

		if (buttonRect.bottom >= footerRect.top && buttonRect.top <= footerRect.bottom) {
			arrowImage.style.filter = 'invert(100%)';
		} else {
			arrowImage.style.filter = 'invert(0%)';
		}
	}

	window.addEventListener('scroll', checkButtonPosition);

	window.addEventListener('resize', checkButtonPosition);

	checkButtonPosition();
});

document.addEventListener('DOMContentLoaded', function () {
	const closeButton = document.getElementById('searchbox__close-button');
	const searchIcon = document.getElementById('searchbox');
	const popUpSearch = document.querySelector('.searchbox-bigbg');
	const arrowUp = document.getElementById('button_up');

	popUpSearch.hidden = true;

	closeButton.addEventListener('click', togglePopUp);
	searchIcon.addEventListener('click', togglePopUp);

	function disableScroll() {
		const scrollY = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.width = '100%';
	}

	function enableScroll() {
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.width = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}

	function togglePopUp() {
		if (popUpSearch.hidden) {
			popUpSearch.hidden = false;
			arrowUp.hidden = true;
			disableScroll();
		} else {
			popUpSearch.hidden = true;
			arrowUp.hidden = false;
			enableScroll();
		}
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('auth__close-button');
	const auth = document.getElementById('auth');
	const wrapperPopUp = document.querySelector('.auth__wrapper');
	const arrowUp = document.getElementById('button_up');
	const header = document.querySelector('.header');

	wrapperPopUp.hidden = true;

	button.addEventListener('click', closePopUp);
	auth.addEventListener('click', openPopUp);

	function disableScroll() {
		const scrollY = window.scrollY;

		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.width = '100%';
	}

	function enableScroll() {
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.width = '';

		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}

	function closePopUp() {
		wrapperPopUp.hidden = !wrapperPopUp.hidden;
		arrowUp.hidden = !arrowUp.hidden;
		header.style.display = 'block';
		enableScroll();
	}

	function openPopUp() {
		wrapperPopUp.hidden = !wrapperPopUp.hidden;
		arrowUp.hidden = !arrowUp.hidden;
		header.style.display = 'none';
		disableScroll();
	}
});

document.addEventListener('DOMContentLoaded', function () {
	var phoneInput = document.getElementById('phoneNum');

	phoneInput.addEventListener('input', function (e) {
		var cursorPosition = this.selectionStart;
		var value = this.value;
		var lengthBefore = value.length;

		var cleaned = value.replace(/\D/g, '');

		var formatted = formatPhoneNumber(cleaned);

		this.value = formatted;

		if (cursorPosition === lengthBefore) {
			cursorPosition = this.value.length;
		}
		this.setSelectionRange(cursorPosition, cursorPosition);
	});

	function formatPhoneNumber(value) {
		if (value.length <= 1) {
			return '+7 (';
		}
		if (value.length <= 4) {
			return '+7 (' + value.slice(1);
		}
		if (value.length <= 7) {
			return '+7 (' + value.slice(1, 4) + ') ' + value.slice(4);
		}
		if (value.length <= 9) {
			return '+7 (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7);
		}
		return '+7 (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9, 11);
	}
});
