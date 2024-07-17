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


searchbox;