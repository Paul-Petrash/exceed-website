const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const carousel = document.getElementById('carousel');
const currentSlideSpan = document.getElementById('current-slide');
const maxSlideSpan = document.getElementById('max-slide');

let currentSlide = 1;
let sliderOffset = 96;
const maxSlides = carousel.childElementCount;

const openPrevSlide = () => {
  if (currentSlide > 1) {
    currentSlide -= 1;
    sliderOffset += 955;
  };

  currentSlideSpan.innerHTML = `0${currentSlide}`;
  carousel.style["transform"] = `translateX(${sliderOffset}px)`;
}

const openNextSlide = () => {
  if (currentSlide < maxSlides) {
    currentSlide += 1;
    sliderOffset -= 955;
  };

  carousel.style["transform"] = `translateX(${sliderOffset}px)`;
  currentSlideSpan.innerHTML = `0${currentSlide}`;
}

carousel.style["transform"] = `translateX(${sliderOffset}px)`;
currentSlideSpan.innerHTML = `0${currentSlide}`;
maxSlideSpan.innerHTML = `0${maxSlides}`;

prevSlide.addEventListener('click', () => openPrevSlide());
nextSlide.addEventListener('click', () => openNextSlide());