window.onscroll = (function () {
	let isScrolledNav = false;

	// Y offset to scroll past
	const ScrollPointNav = 10;

	//HTML Elements
	const nav = document.querySelector(".nav-container");
	const head1 = document.querySelector(".heading-1");
	const head3 = document.querySelector(".heading-3");

	if (window.pageYOffset > ScrollPointNav && !isScrolledNav) {
		nav.classList.add("scroll");
		head1.classList.add("scroll");
		head3.classList.add("scroll");
		isScrolledNav = true;
	}

	function onScroll() {
		if (window.pageYOffset > ScrollPointNav && !isScrolledNav) {
			nav.classList.add("scroll");
			head1.classList.add("scroll");
			head3.classList.add("scroll");
			isScrolledNav = true;
		} else if (window.pageYOffset <= ScrollPointNav && isScrolledNav) {
			nav.classList.remove("scroll");
			head1.classList.remove("scroll");
			head3.classList.remove("scroll");
			isScrolledNav = false;
		}
	}

	onScroll();
	return onScroll;
})();

document.addEventListener("click", function ClickOutsideNav(event) {
	const nav = document.querySelector(".mobile-nav-container");
	const navBtn = document.querySelector(".btn-burger");
	const checkbox = document.getElementById("mobile-nav");

	if (nav.contains(event.target) && checkbox.checked === true) {
		checkbox.checked = false;
		console.log("clicked");
	}
});

function scrollToHome() {
	const anchorHome = document.getElementById("home");
	anchorHome.scrollIntoView({ behavior: "smooth" });
}
function scrollToInfoGraphics() {
	const anchorAbout = document.getElementById("Infographics");
	anchorAbout.scrollIntoView({ behavior: "smooth" });
}
function scrollToGraphicDesign() {
	const anchorAbout = document.getElementById("GraphicDesign");
	anchorAbout.scrollIntoView({ behavior: "smooth" });
}
function scrollToMotionGraphics() {
	const anchorAbout = document.getElementById("MotionGraphics");
	anchorAbout.scrollIntoView({ behavior: "smooth" });
}

function viewLarger() {}
const imgs = document.querySelectorAll(".tiles img");
const vids = document.querySelectorAll(".tiles video");
const fullPage = document.querySelector("#fullpage");
const galleryViewerImg = document.querySelector("#galleryViewerImg");
const galleryVieweVideo = document.querySelector("#galleryViewerVideo");
const galleryBG = document.querySelector("#galleryBG");
const viewer = document.querySelectorAll(".viewer");

imgs.forEach((img) => {
	img.addEventListener("click", function () {
		galleryViewerImg.src = img.src;
		fullPage.style.display = "block";
		galleryBG.style.display = "block";
		galleryViewerImg.style.display = "block";
		galleryViewerVideo.style.display = "none";
	});
});

vids.forEach((video) => {
	video.addEventListener("click", function () {
		galleryViewerVideo.src = video.src;
		fullPage.style.display = "block";
		galleryBG.style.display = "block";
		galleryViewerVideo.style.display = "block";
		galleryViewerImg.style.display = "none";
	});
});

viewer.forEach((div) => {
	div.addEventListener("click", function () {
		galleryViewerImg.style.display = "none";
		fullPage.style.display = "none";
		galleryBG.style.display = "none";
	});
});

// document.addEventListener('click', function (e){

//     // if(fullPage.contains(e.target) && fullPage.style.display == 'none') {
//     //     fullPage.style.display = 'block'
//     //     galleryViewer.style.display = 'block'
//     //     galleryBG.style.display = 'block'
//     // } else

// if (fullPage.contains(e.target) && fullPage.style.display == 'block') {
//         fullPage.style.display = 'none'
//         galleryViewer.style.display = 'none'
//         galleryBG.style.display = 'none'
//     }
// })

// if (document.getElementById("elementId").style.display == 'block') {
//     alert('this Element is block');
//   }
