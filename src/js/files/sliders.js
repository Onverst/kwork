import Swiper, { Mousewheel, FreeMode } from 'swiper';
import "../../scss/base/swiper.scss";

function initSliders() {
	if (document.querySelector('.scheme__slider')) {
		new Swiper('.scheme__slider', {
			modules: [Mousewheel, FreeMode],
			direction: "vertical",
			slidesPerView: 1,
			mousewheel: true,
			// freeMode: true,

			// События
			on: {

			}
		});
	}
}
window.addEventListener("load", function (e) {
	initSliders();
});