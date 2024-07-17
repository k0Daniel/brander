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
	const button = document.getElementById('searchbox__close-button');
	const search = document.getElementById('searchbox');
	const header = document.querySelector('.header');
	const popUpSearch = document.querySelector('.searchbox-bigbg');
	const arrowUp = document.getElementById('button_up');

	popUpSearch.hidden = true;

	button.addEventListener('click', closePopUp);
	search.addEventListener('click', openPopUp);

	function closePopUp() {
		popUpSearch.hidden = true;
		header.style.display = 'block';
		arrowUp.hidden = false;
	}

	function openPopUp() {
		popUpSearch.hidden = false;
		header.style.display = 'none';
		arrowUp.hidden = true;
	}
});
