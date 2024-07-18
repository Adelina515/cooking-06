const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handlerInput = (e) => {
  const input = e.currentTarget.value;
  nameOutput.textContent = input;
  if (input === "") {
    nameOutput.textContent = "Anonymous";
  }
  console.log(input);
};

inputName.addEventListener("input", handlerInput);
