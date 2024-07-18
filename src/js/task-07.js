const inputSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handlerControl = (ev) => {
  const rangeOfNumber = ev.currentTarget.value;
  text.style.fontSize = Number(rangeOfNumber) + "px";
};
inputSize.addEventListener("input", handlerControl);
