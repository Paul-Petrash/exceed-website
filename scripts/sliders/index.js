function noop(){};

const handleChange = (event) => {;
  _init_siema('feedback-slider #feedback-carousel-container',
   'feedback-slider .cases-carousel-slide-counter',
    '.cases-carousel-slide-counter span #cases-carousel-current-slide-mob',{
    gap: 15,
    forceSlidePos: true,
    prevNext: true,
  });
  _init_siema('cases-carousel #cases-carousel-container',
  'cases-carousel .cases-carousel-slide-counter',
  '.cases-carousel-slide-counter span #cases-carousel-current-slide',{
    gap: 15,
    forceSlidePos: true,
    prevNext: true,
  });
  _init_siema('team-slider #team-carousel-container',
  'team-slider .team-carousel-slide-counter',
  '.team-carousel-slide-counter span #team-carousel-current-slide',{
    gap: 15,
    forceSlidePos: true,
    prevNext: true,
  });
}

window.addEventListener('DOMContentLoaded', (event) => handleChange(event));
window.addEventListener('toggleDisplay', (event) => handleChange(event));

function _init_siema(sel, navSel, infoSel, opts = {}) {
  let el = ge(sel);
  if(!el){
    return;
  }
  let slideInfo;

  if(!el){
    console.warn('[our team-controller] not able to find slider by this selector: ', sel);
    return;
  }

  if(opts.prevNext){
    slideInfo = ge(infoSel)
  }

  try{
    const options = {
      container: sel,
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
    };

    if(opts.prevNext) {
      options.prevButton = navSel + ' .prev-slide';
      options.nextButton = navSel + ' .next-slide';
    }else{
      options.controls = false;
    }

    if(opts.responsive){
      options.responsive = opts.responsive
    }

    if(opts.autoplay){
      options.autoplay = true;
      options.autoplayButton = false;
      options.autoplayTimeout = 2000;
      options.autoplayHoverPause = true;
    }

    const slider = tns(options);

    if(opts.prevNext) {
      slider.events.on('transitionEnd', (item) => {
        slideInfo.innerText = item.displayIndex < 10 ? `0${item.displayIndex}` : item.displayIndex;
        // slideInfo.innerText = item.displayIndex;
      });
    }

  }catch(e){
    console.warn('INIT SLIDER ERROR ',sel, e)
  }
  // window[key] = k;
  // console.log('*........ ## hhhhhhhhhhhhhhhhhh', k);
}
