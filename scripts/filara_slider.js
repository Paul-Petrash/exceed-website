window.onload = function () {
  let input = document.querySelector(".input-slider");
  let drag_line = document.querySelector(".drag-line");
  let slide = document.getElementById("slide");

  if (input) {
    input.oninput = function () {
      let sliderVal = input.value;
      drag_line.style.left = sliderVal + "%";
      slide.style.left = sliderVal + "%";
    };
  }
};
