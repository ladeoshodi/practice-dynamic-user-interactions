const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("hidden");
});

const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector("#slide-button-next");
const prevButton = document.querySelector("#slide-button-prev");
const dots = document.querySelectorAll(".dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
  // remove all slides not currently being viewed
  for (const slide of slides) {
    slide.classList.remove("slide-visible");
    slide.classList.add("slide-hidden");
  }
}

function handleMoveToNextSlide() {
  hideAllSlides();
  // check if last slide has been reached
  if (position === numberOfSlides - 1) {
    position = 0; // go back to first slide
  } else {
    // move to next slide
    position++;
  }
  // make current slide visible
  slides[position].classList.add("slide-visible");

  // update dot to represent current slide
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
}

function handleMoveToPrevSlide() {
  hideAllSlides();
  // check if we're on the first slide
  if (position === 0) {
    position = numberOfSlides - 1; // move to the last slide
  } else {
    // move back one
    position--;
  }
  // make current slide visible
  slides[position].classList.add("slide-visible");

  // update dot to represent current slide
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
}


nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

// todo autoslider