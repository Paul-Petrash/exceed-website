function noop(){};


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('LOOOG', 'init');
  _init_siema('feedback-carousel #carousel', 'feedback-carousel .slide-counter', null,{
    gap: 15,
    forceSlidePos: true,
    prevNext: true,
  })

});
const initSlider = () => {

};


function _init_siema(sel, navSel, navDots, opts = {}) {
  let el = ge(sel);
  if(!el){
    return;
  }
  let parent = el.parentNode;
  let slideInfo;

  console.log('LOOOG', el);

  console.log('LOOOG', parent);
  if(!el){
    console.warn('[our team-controller] not able to find slider by this selector: ', sel);
    return;
  }

  // if(opts.prevNext){
  //   slideInfo = ge('.slider-nav-dots span', null, null, parent)
  // }

  try{
    const options = {
      container: sel,
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
    };

    if(opts.prevNext) {
      options.prevButton = navSel + ' #prev-slide';
      options.nextButton = navSel + ' #next-slide';
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
      // slider.events.on('transitionEnd', (item) => {
        // slideInfo.innerText = item.displayIndex
      // });
    }

  }catch(e){
    console.warn('INIT SLIDER ERROR ',sel, e)
  }
  // window[key] = k;
  // console.log('*........ ## hhhhhhhhhhhhhhhhhh', k);
}
