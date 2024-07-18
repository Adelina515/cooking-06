function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls");
const boxesDiv = document.querySelector("#boxes");

let sizeBox = (boxesDiv.style.size = "30px");
const createBoxes = (amount) => {
  console.log("boxesDiv", boxesDiv);
  sizeBox += "10px";
  const div = boxesDiv.insertAdjacentHTML("beforebegin", "<div></div>");
  console.log("divdiv", div);
  const divOfNumber = amount * div;
  console.log("div", divOfNumber);
  return divOfNumber;
};

const handleCreate = (ev) => {
  const createBoxBtn = ev.target;
  const boxValue = createBoxBtn.value;
  createBoxes(boxValue);

  console.log(createBoxBtn.value);
};

controlsDiv.addEventListener("click", handleCreate);
