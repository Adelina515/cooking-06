const inputValid = document.querySelector("#validation-input");

const handlerInput = (ev) => {
  const inputValueLength = ev.currentTarget.value.length;
  const atrLength = Number(inputValid.getAttribute("data-length"));
  if (inputValueLength !== atrLength) {
    inputValid.classList.add("invalid");
    inputValid.classList.remove("valid");
  } else {
    inputValid.classList.add("valid");
    inputValid.classList.remove("invalid");
  }
};

inputValid.addEventListener("blur", handlerInput);
