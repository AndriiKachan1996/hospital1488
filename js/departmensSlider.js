const swiper = new Swiper(".sample-slider", {
	loop: true,
	effect: "fade",

	pagination: {
		el: ".swiper-pagination",
	},
	autoplay: {
		//auto play
		delay: 5000,
	},
	loop: true,
	grabCursor: true, //grab cursor
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	touchRatio: 1.5,
	touchAngle: 45,
	grabCursor: true,
	speed: 800,
});

