const burgerMenu = document.getElementById('burger-menu');
const openMenuIcon = document.getElementById('nav-burger');
const closeMenuIcon = document.getElementById('burger-close-icon');

const body = document.body;
const casesSlider = document.querySelector('.cases-slider');
const casesGrid = document.querySelector('.cases-grid');

const carousel = document.getElementById('carousel');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const currentSlideSpan = document.getElementById('current-slide');
const maxSlideSpan = document.getElementById('max-slide');

const carouselMobile = document.getElementById('cases-carousel-container');
const prevSlideMobile = document.getElementById('cases-carousel-prev-slide');
const nextSlideMobile = document.getElementById('cases-carousel-next-slide');
const currentSlideSpanMobile = document.getElementById('cases-carousel-current-slide');
const maxSlideSpanMobile = document.getElementById('cases-carousel-max-slide');

let currentSlide = 1;
let currentSlideMobile = 1;
let sliderOffset = 96;
let sliderOffsetMobile = 0;
let mobileSliderItem = document.querySelector('.cases-carousel-item')?.clientWidth;
const maxSlides = carousel?.childElementCount || 1;
const maxSlidesMobile = 10;

const handleMenu = () => {
  if (!burgerMenu.style['top'] || burgerMenu.style['top'] === '-800px') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    burgerMenu.style['top'] = '0';
    body.classList.add('body-scroll-disabled');
  } else {
    burgerMenu.style['top'] = '-800px';
    body.classList.remove('body-scroll-disabled');
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

const openPrevSlideMobile = () => {
  if (currentSlideMobile > 1) {
    currentSlideMobile -= 1;
    sliderOffsetMobile += mobileSliderItem + 40;
  };

  currentSlideSpanMobile.innerHTML = `0${currentSlideMobile}`;
  carouselMobile.style["margin-left"] = `${sliderOffsetMobile}px`;
}

const openNextSlideMobile = () => {
  if (currentSlideMobile < maxSlidesMobile) {
    currentSlideMobile += 1;
    sliderOffsetMobile -= mobileSliderItem + 40
  };

  carouselMobile.style["margin-left"] = `${sliderOffsetMobile}px`;
  currentSlideSpanMobile.innerHTML = `${currentSlideMobile < 10 ? '0' : ''}${currentSlideMobile}`;
}

const displayCases = () => {
  if (window.innerWidth < 1024) {
    casesSlider.parentNode.parentNode.style["display"] = 'block';
    casesGrid.style["display"] = 'none';
  } else {
    casesSlider.parentNode.parentNode.style["display"] = 'none';
    casesGrid.style["display"] = 'grid';
  }
}

displayCases();

openMenuIcon.addEventListener('click', () => handleMenu());
closeMenuIcon.addEventListener('click', () => handleMenu());
window.addEventListener('resize', () => displayCases(), true);

if (carousel) {
  carousel.style["transform"] = `translateX(${sliderOffset}px)`;
  currentSlideSpan.innerHTML = `0${currentSlide}`;
  maxSlideSpan.innerHTML = `0${maxSlides}`;
  prevSlide.addEventListener('click', () => openPrevSlide());
  nextSlide.addEventListener('click', () => openNextSlide());
}
if (carouselMobile) {
  prevSlideMobile.addEventListener('click', () => openPrevSlideMobile());
  nextSlideMobile.addEventListener('click', () => openNextSlideMobile());
  currentSlideSpanMobile.innerHTML = `0${currentSlideMobile}`;
  maxSlideSpanMobile.innerHTML = `${maxSlidesMobile}`;
}