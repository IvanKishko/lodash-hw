//* TASK 1
function debounce(func, wait) {
  let timeout;
  return function (...value) {
    const context = this;
    timeout = setTimeout(() => func.apply(context, value), wait);
  };
}

const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

const updateImageSize = (event) => {
  const size = event.target.value;
  sliderImage.style.width = `${size}%`;
  sliderImage.style.height = "auto";
};

const debouncedUpdateImageSize = debounce(updateImageSize, 200);
sliderInput.addEventListener("input", debouncedUpdateImageSize);

//* TASK 2
const box = document.getElementById("box");

const moveBox = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  box.style.transform = `translate(${x}px, ${y}px)`;
};

const debouncedMoveBox = _.debounce(moveBox, 100);
window.addEventListener("mousemove", debouncedMoveBox);
