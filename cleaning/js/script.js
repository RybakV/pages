
/*  mobile menu toggle */
/* $('.menu-btn').on('click', function(){
  if($(this).parents('body').is('.opened-menu') !== true) {
    $('body').addClass('opened-menu');
    $('.menu').addClass('opened');
  }
  else if($(this).parents('body').is('.opened-menu') === true){
    $('body').removeClass('opened-menu');
    $('.menu').removeClass('opened');
  }
});
*/


// Anchor scrolls
const anchors = document.querySelectorAll('a[data-target^="anchor"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		const sectionTarget = anchor.getAttribute("href");
		let targetOffset = document.querySelector(""+sectionTarget).offsetTop  - 150;
		window.scrollTo({
			top: targetOffset,
			behavior: "smooth"
		});
	});
}
// END Anchor scrolls


// SLIDER reviews
const previousBtn = document.querySelector('.slider__previous')
const nextBtn = document.querySelector('.slider__next')

const slides = document.querySelector('.slider__slides')
const slidesNumber = slides.children.length

// Numbered from 0
let currentSlide = 0

const updateSlider = () => {
  const slideWidth = slides.clientWidth
  const offset = -currentSlide * slideWidth

  slides.setAttribute('style', 'transform: translate(' + offset + 'px)')
}

previousBtn.addEventListener("click", () => {
  --currentSlide
  if (currentSlide < 0) currentSlide = slidesNumber - 1

  updateSlider()
})

nextBtn.addEventListener('click', () => {
  ++currentSlide
  if (currentSlide >= slidesNumber) currentSlide = 0

  updateSlider()
})
// END SLIDER
