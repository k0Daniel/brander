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

document.addEventListener('DOMContentLoaded', function () {
	const checkbox = document.getElementById('burger-checkbox');
	const body = document.body;
	const arrowUp = document.getElementById('button_up');

	checkbox.addEventListener('change', function () {
		if (this.checked) {
			body.style.overflow = 'hidden';
			arrowUp.hidden = !arrowUp.hidden;
		} else {
			body.style.overflow = 'auto';
			arrowUp.hidden = !arrowUp.hidden;
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const cookieWrapper = document.querySelector('.cookie__wrapper');
	const cookieButton = document.querySelector('.cookie__button');

	if (!localStorage.getItem('cookieAccepted')) {
		cookieWrapper.style.display = 'flex';
	}

	cookieButton.addEventListener('click', function () {
		cookieWrapper.style.display = 'none';
		localStorage.setItem('cookieAccepted', 'true');
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const options = document.querySelectorAll('.option');

	options.forEach(option => {
		option.addEventListener('click', () => {
			options.forEach(opt => opt.classList.remove('active'));
			option.classList.add('active');
		});
	});
});

window.addEventListener('load', function () {
	function checkScreenSize() {
		if (window.innerWidth < 393) {
			document.body.innerHTML =
				'<p style="font-size: 24px; text-align: center; margin-top: 50%;">Сайт не адаптирован под ваше устройство</p>';
		}
	}

	checkScreenSize();

	window.addEventListener('resize', checkScreenSize);
});
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if (panel.style.display === 'block') {
			panel.style.display = 'none';
		} else {
			panel.style.display = 'block';
		}
	});
}
