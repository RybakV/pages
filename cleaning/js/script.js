
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
