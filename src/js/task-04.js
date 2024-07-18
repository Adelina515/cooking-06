const btnDcr = document.querySelector("button[data-action='decrement']");
const btnInc = document.querySelector("button[data-action='increment']");
const valueSpan = document.querySelector("#value");
const smyle = document.querySelector("#smyle");
const noSmyle = document.querySelector("#notsmyle");

let counterValue = 0;
const updateDisplay = () => {
  valueSpan.textContent = counterValue;
  if (counterValue > 0) {
    noSmyle.style.display = "none";
    smyle.style.display = "block";
  } else if (counterValue < 0) {
    smyle.style.display = "none";
    noSmyle.style.display = "block";
  } else {
    smyle.style.display = "none";
    noSmyle.style.display = "none";
  }
};

const handlerDcr = () => {
  counterValue -= 1;
  updateDisplay();
};

const handlerInc = () => {
  counterValue += 1;
  updateDisplay();
};

btnDcr.addEventListener("click", handlerDcr);
btnInc.addEventListener("click", handlerInc);

console.log("btnDcr", btnDcr);
console.log("btnInc", btnInc);
