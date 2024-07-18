function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector("button.change-color");
const textValue = document.querySelector("span.color");

const handleChangeColor = (ev) => {
  document.body.style.backgroundColor = getRandomHexColor();
  textValue.textContent = getRandomHexColor();
};
btnChange.addEventListener("click", handleChangeColor);
console.log(btnChange);
