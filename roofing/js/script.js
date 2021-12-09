
// mobile menu toggle
document.getElementById('mobile-menu-toggle').onclick = function() {
      document.getElementById('main-menu').classList.toggle('opened');
  }

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

// DROPDOWN open TOGGLE
function removeClass(e, c) {
  elm = document.querySelectorAll(mClass);
  for (var i = 0; i < elm.length; i++) {
    if (c == 'active') {
      elm[i].classList.remove('active');
    } else {
      if (!elm[i].classList.contains('active')) elm[i].querySelector('.dropdown-menu').classList.remove('show');
    }
  }
}

var mClass = '.dropdown-parent'
var menu = document.querySelectorAll(mClass);
menu.forEach(function(o) {
  o.addEventListener('click', function(e) {
    e.preventDefault();
    removeClass(o, 'active');
    this.classList.add('active');
    removeClass(o);
    this.querySelector('.dropdown-menu').classList.toggle('show');
  });
});

// SLIDER reviews
/*
const previousBtn = document.querySelector('.slider__previous')
const nextBtn = document.querySelector('.slider__next')

const slides = document.querySelector('.slider__slides')
const slidesNumber = slides.children.length

*/

// Numbered from 0

/*
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

*/


// END SLIDER
