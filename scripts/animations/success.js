
const container = document.getElementById('rocket-inimation')

lottie.loadAnimation({
  container: container, // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
   path: '../scripts/animations/animation-rocket.json' // the path to the animation json
});