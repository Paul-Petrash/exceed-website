const burgerMenu = document.getElementById('burger-menu');
const openMenuIcon = document.getElementById('nav-burger');
const closeMenuIcon = document.getElementById('burger-close-icon');
const body = document.body;
const casesSlider = document.querySelector('.cases-slider');
const casesGrid = document.querySelector('.cases-grid');
const process = document.getElementById('process');

const processLayout = document.querySelector('.process-layout');
const processLayoutMobile = document.querySelector('.process-layout-mobile');
// feedback slider for desktop
const carousel = document.getElementById('carousel');
const feedback = document.getElementById('feedback');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const currentSlideSpan = document.getElementById('current-slide');
const maxSlideSpan = document.getElementById('max-slide');
// cases variables
const carouselMobile = document.getElementById('cases-carousel-container');
const prevSlideMobile = document.getElementById('cases-carousel-prev-slide');
const nextSlideMobile = document.getElementById('cases-carousel-next-slide');
const currentSlideSpanMobile = document.getElementById('cases-carousel-current-slide');
const maxSlideSpanMobile = document.getElementById('cases-carousel-max-slide');
// team slider for mobile
const teamContainer = document.getElementById('team-slider-mobile');
const teamCarouselMobile = document.getElementById('team-carousel-container');
const teamPrevSlideMobile = document.getElementById('team-carousel-prev-slide');
const teamNextSlideMobile = document.getElementById('team-carousel-next-slide');
const teamCurrentSlideSpanMobile = document.getElementById('team-carousel-current-slide');
const teamMaxSlideSpanMobile = document.getElementById('team-carousel-max-slide');
// feedback slider for mobile devices
const feedbackCarouselContainer = document.getElementById('feedback-car-mobile');
const feedbackCarouselMobile = document.getElementById('feedback-slider');
const feedbackCarouselList = document.getElementById('feedback-carousel-container');
const feedbackPrevSlideMobile = document.getElementById('cases-carousel-prev-slide-mob');
const feedbackNextSlideMobile = document.getElementById('cases-carousel-next-slide-mob');
const feedbackCurrentSlideMobile = document.getElementById('cases-carousel-current-slide-mob');
const feedbackMaxSlideMobile = document.getElementById('cases-carousel-max-slide-mob');

let currentSlide = 1;
let currentSlideMobile = 1;
let sliderOffset = 96;
let sliderOffsetMobile = 0;
let mobileSliderItem = document.querySelector('.cases-carousel-item')?.clientWidth;
const maxSlides = carousel?.childElementCount || 1;
const maxSlidesMobile = 10;
let feedbackCurrentItem = 1;
const feedbackMaxItems = feedbackCarouselList?.childElementCount || 1;
let teamCurrentItem = 1;
const teamMaxItems = teamCarouselMobile?.childElementCount || 1;
const isLowerThan1024 = window.innerWidth < 1024;

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

const openPrevSlideFeedbackMob = () => {
  if (feedbackCurrentItem > 1) {
    feedbackCurrentItem -= 1;
    sliderOffsetMobile += mobileSliderItem + 40;
  };

  feedbackCurrentSlideMobile.innerHTML = `0${feedbackCurrentItem}`;
  feedbackCarouselMobile.style["margin-left"] = `${sliderOffsetMobile}px`;
}

const openNextSlideFeedbackMob = () => {
  if (feedbackCurrentItem < feedbackMaxItems) {
    feedbackCurrentItem += 1;
    sliderOffsetMobile -= mobileSliderItem + 40
  };

  feedbackCarouselMobile.style["margin-left"] = `${sliderOffsetMobile}px`;
  feedbackCurrentSlideMobile.innerHTML = `${feedbackCurrentItem < 10 ? '0' : ''}${feedbackCurrentItem}`;
}

const casesPrevSlideMobile = () => {
  if (teamCurrentItem > 1) {
    teamCurrentItem -= 1;
    sliderOffsetMobile += mobileSliderItem + 40;
  };

  teamCurrentSlideSpanMobile.innerHTML = `0${teamCurrentItem}`;
  teamCarouselMobile.style["margin-left"] = `${sliderOffsetMobile}px`;
}

const casesNextSlideMobile = () => {
  if (teamCurrentItem < teamMaxItems) {
    teamCurrentItem += 1;
    sliderOffsetMobile -= mobileSliderItem + 40;
  };

  teamCarouselMobile.style["margin-left"] = `${sliderOffsetMobile}px`;
  teamCurrentSlideSpanMobile.innerHTML = `${teamCurrentItem < 10 ? '0' : ''}${teamCurrentItem}`;
}

const handleResize = () => {
  if (window.innerWidth < 1024) {
    casesSlider && (casesSlider.parentNode.parentNode.style["display"] = 'block');
    casesGrid && (casesGrid.style["display"] = 'none');
    process && (process.style['margin-bottom'] = '144px');
    processLayout && (processLayout.hidden = true);
    processLayoutMobile && (processLayoutMobile.style["display"] = 'flex');
    feedbackCarouselContainer && (feedbackCarouselContainer.hidden = false);
    feedback && (feedback.hidden = true);
  } else {
    casesSlider && (casesSlider.parentNode.parentNode.style["display"] = 'none');
    casesGrid && (casesGrid.style["display"] = 'grid');
    process && (process.style['margin-bottom'] = '1000px');
    processLayout && (processLayout.hidden = false);
    processLayoutMobile && (processLayoutMobile.style["display"] = 'none');
    feedbackCarouselContainer && (feedbackCarouselContainer.hidden = true);
    feedback && (feedback.hidden = false);
  }
}

handleResize();
// set visablity for certain blocks after loading page
if (isLowerThan1024) {
  process && (process.style['margin-bottom'] = '144px');
  processLayout && (processLayout.hidden = true);
  processLayoutMobile && (processLayoutMobile.style["display"] = 'flex');
  feedbackCarouselContainer && (feedbackCarouselContainer.hidden = false);
  feedback && (feedback.hidden = true);
} else {
  process && (process.style['margin-bottom'] = '1000px');
  processLayout && (processLayout.hidden = false);
  processLayoutMobile && (processLayoutMobile.style["display"] = 'none');
  feedbackCarouselContainer && (feedbackCarouselContainer.hidden = true);
  feedback && (feedback.hidden = false);
};

openMenuIcon.addEventListener('click', () => handleMenu());
closeMenuIcon.addEventListener('click', () => handleMenu());
window.addEventListener('resize', () => handleResize(), true);

if (carousel) {
  carousel.style["transform"] = `translateX(${sliderOffset}px)`;
  currentSlideSpan.innerHTML = `0${currentSlide}`;
  maxSlideSpan.innerHTML = `0${maxSlides}`;
  prevSlide.addEventListener('click', () => openPrevSlide());
  nextSlide.addEventListener('click', () => openNextSlide());
}
if (feedbackCarouselContainer) {
  feedbackCurrentSlideMobile.innerHTML = `0${feedbackCurrentItem}`;
  feedbackMaxSlideMobile.innerHTML = `0${feedbackMaxItems}`;
  feedbackPrevSlideMobile.addEventListener('click', () => openPrevSlideFeedbackMob());
  feedbackNextSlideMobile.addEventListener('click', () => openNextSlideFeedbackMob());
}
if (carouselMobile) {
  prevSlideMobile.addEventListener('click', () => openPrevSlideMobile());
  nextSlideMobile.addEventListener('click', () => openNextSlideMobile());
  currentSlideSpanMobile.innerHTML = `0${currentSlideMobile}`;
  maxSlideSpanMobile.innerHTML = `${maxSlidesMobile < 10 ? '0' : ''}${maxSlidesMobile}`;
}
if (teamContainer) {
  teamPrevSlideMobile.addEventListener('click', () => casesPrevSlideMobile());
  teamNextSlideMobile.addEventListener('click', () => casesNextSlideMobile());
  teamCurrentSlideSpanMobile.innerHTML = `0${teamCurrentItem}`;
  teamMaxSlideSpanMobile.innerHTML = `${teamMaxItems < 10 ? '0' : ''}${teamMaxItems}`;
}

//handling form

const nameInput = document.querySelector('.cfn');
const phoneInput = document.querySelector('.cfp');
const emailInput = document.querySelector('.cfe');
const infoInput = document.querySelector('.cfm');
const tagsList = document.querySelector('.tags-list');
const sendFormBtn = document.getElementById('send-request');
const selectedTags = [];

if (document.querySelector('.request')) {
  nameInput.addEventListener('change', (e) => {
    const data = JSON.stringify(e.target.value);
    localStorage.setItem('fullname', data);
  });
  phoneInput.addEventListener('change', (e) => {
    const data = JSON.stringify(e.target.value);
    localStorage.setItem('phone', data);
  });
  emailInput.addEventListener('change', (e) => {
    const data = JSON.stringify(e.target.value);
    localStorage.setItem('email', data);
  });
  infoInput.addEventListener('change', (e) => {
    const data = JSON.stringify(e.target.value);
    localStorage.setItem('comment', data);
  });
  tagsList.querySelectorAll('.tag').forEach(el => el.addEventListener('click', (e) => {
    const node = e.target;
  
    node.classList.toggle('tag-pressed');
    if (node.classList.contains('tag-pressed')) {
      selectedTags.push(node.id);
    } else {
      const indx = selectedTags.indexOf(node.id);
      selectedTags.splice(indx, 1);
    }
    localStorage.setItem('card-tag', JSON.stringify(selectedTags));
  
    // localStorage.setItem('fullname', e.target.value);
  }))
  // tagsList.querySelectorAll('.tag').addEventListener('click', (e) => {
  //   const node = e.target;
  
  //   node.classList.toggle('tag-pressed');
  //   if (node.classList.contains('tag-pressed')) {
  //     selectedTags.push(node.id);
  //   } else {
  //     const indx = selectedTags.indexOf(node.id);
  //     selectedTags.splice(indx, 1);
  //   }
  //   localStorage.setItem('card-tag', JSON.stringify(selectedTags));
  
  //   // localStorage.setItem('fullname', e.target.value);
  // });
}
