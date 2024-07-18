const formLogin = document.querySelector(".login-form");

const handleSubmit = (ev) => {
  ev.preventDefault();
  const { email, password } = ev.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Будь ласка, заповніть усі поля");
  } else {
    const submitForm = {
      email: email.value,
      password: password.value,
    };
    console.log(submitForm);
  }
  formLogin.reset();
};

formLogin.addEventListener("submit", handleSubmit);
