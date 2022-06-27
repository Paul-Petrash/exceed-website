const burgerMenu = document.getElementById('burger-menu');
const openMenuIcon = document.getElementById('nav-burger');
const closeMenuIcon = document.getElementById('burger-close-icon');

const body = document.body;

const carousel = document.getElementById('carousel');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const currentSlideSpan = document.getElementById('current-slide');
const maxSlideSpan = document.getElementById('max-slide');

let currentSlide = 1;
let sliderOffset = 96;
const maxSlides = carousel?.childElementCount || 1;

const handleMenu = () => {
  if (!burgerMenu.style['top'] || burgerMenu.style['top'] === '-800px') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log(burgerMenu.style)
    burgerMenu.style['top'] = '0';
    body.classList.add('body-scroll-disabled');
    console.log(burgerMenu.style)
  } else {
    console.log(burgerMenu.style)
    burgerMenu.style['top'] = '-800px';
    body.classList.remove('body-scroll-disabled');
    console.log(burgerMenu.style)
  }
}

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

openMenuIcon.addEventListener('click', () => handleMenu());
closeMenuIcon.addEventListener('click', () => handleMenu());
if (carousel) {
  carousel.style["transform"] = `translateX(${sliderOffset}px)`;
  currentSlideSpan.innerHTML = `0${currentSlide}`;
  maxSlideSpan.innerHTML = `0${maxSlides}`;
  prevSlide.addEventListener('click', () => openPrevSlide());
  nextSlide.addEventListener('click', () => openNextSlide());
}