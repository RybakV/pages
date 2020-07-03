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
