/*
      * =================
      * Navbar onscroll behavior
      * =================
      */
window.onscroll = () => {
  const header = document.querySelector("header");
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("navbar-fixed");
    header.classList.remove("lg:w-10/12");
    header.classList.remove("lg:top-8");
    header.classList.remove("lg:rounded-lg");
  } else {
    header.classList.add("lg:rounded-lg");
    header.classList.add("lg:w-10/12");
    header.classList.add("lg:top-8");
    header.classList.remove("navbar-fixed");
  }
};
/*
       * ===============
       * Hamburger button
       * ===============
       */
const hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  document.getElementById("navbar-menu").classList.toggle("hidden");
});
const hamburgerBtnFooter = document.getElementById("hamburger-footer");
hamburgerBtnFooter.addEventListener("click", () => {
  hamburgerBtnFooter.classList.toggle("hamburger-active");
  document.getElementById("footer-menu").classList.toggle("hidden");
});

/*
* ===============
* Carousel
* ===============
*/

const prevBtn = document.querySelector("#carouselPrev");
const nextBtn = document.querySelector("#carouselNext");
const carouselEl = ["#carousel", "b", "c", "d"];
let carouselIdx = 0;
prevBtn.addEventListener("click", e => {
  e.preventDefault();
  // carouselIdx = carouselIdx - 1;
  // if (carouselIdx < 0) carouselIdx = carouselEl.length - 1;
  // document.querySelector(carouselEl[carouselIdx]).classList.remove("hidden");
  console.log(carouselIdx);
});
nextBtn.addEventListener("click", e => {
  e.preventDefault();
  // carouselIdx = carouselIdx + 1;
  // if (carouselIdx > carouselEl.length - 1) carouselIdx = 0;
  // console.log(carouselEl[carouselIdx]);
  // console.log(carouselIdx);
});
