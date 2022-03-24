import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//* --- Sort setting by default --- *//
const links = document.querySelectorAll('.catalog__type'),
	arrows = document.querySelectorAll('.catalog__arrow'),
	pages = document.querySelectorAll('.page__link');

const destruction = (array) => {
	for(let index of array) {
		index.classList.remove('active');
	}
}

links.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		destruction(links);
		link.classList.add('active');		
	});
});
arrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		e.preventDefault();
		destruction(arrows);
		arrow.classList.add('active');
	})
});
pages.forEach((page) => {
	page.addEventListener('click', (e) => {
		e.preventDefault();
		destruction(pages);
		page.classList.add('active');		
	});
});

//* --- Input-Range setting --- *//
if (window.location.pathname.indexOf('/catalog.html') != -1) {
	let $slider = $("#range");
	let $fill = $('.range__bar .range__fill');

	function setBar() {
		$fill.css("width", $slider.val() + "%");
	}
	
	$slider.on("input", setBar);
	setBar();
}

//* --- Burger --- *//
const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.nav');
const burgerList = [burgerBtn, burgerMenu];
burgerBtn.addEventListener('click', () => {
	burgerList.forEach((e) => {
		e.classList.toggle('active');
	})
	
	// Anchor crossing
	for (let i = 0; i < burgerList.length; i++) {
		if (burgerList[i].classList.contains('active')) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.scrollBehavior = 'auto';
		} else {
			document.body.style.overflow = 'auto';	
			document.documentElement.style.scrollBehavior = 'smooth';
		}
	}
})

// Anchor crossing
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		destruction(navLinks);
		document.body.style.overflow = 'auto';	
		setTimeout(()=> {
			document.documentElement.style.scrollBehavior = 'smooth';	
		}, 1000);
	});
});
