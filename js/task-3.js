const input = document.getElementById("name-input");
const h1El = document.querySelector("#name-output");

const hosgeldin = (event) => {
  const foo = event.target.value.trim();
  if (foo.length === 0) {
    h1El.textContent = "Anonymous";
  } else {
    h1El.textContent = foo;
  }
};
input.addEventListener("input", hosgeldin);
