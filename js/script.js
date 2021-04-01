const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
	mainMenu.classList.toggle('show');
});

const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
