// selection
const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

// Nav Toggle
menuBtn.addEventListener('click', () => {
	mainMenu.classList.toggle('show');
});

// Scroll Button Hide/Show
window.addEventListener('scroll', () => {
	const scrollY = window.scrollY;
	// console.log(scrollY);

	if (Math.round(scrollY) <= 250) {
		scrollToTopBtn.style.display = 'none';
	} else scrollToTopBtn.style.display = 'block';
});

// Scroll to top
scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
