const registerForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const mail = event.target.elements.email.value.trim();
  const pass = event.target.elements.password.value.trim();

  if (mail === "" || pass === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: mail,
    password: pass,
  };

  console.log(formData);
  event.target.reset();
}

registerForm.addEventListener("submit", handleSubmit);
