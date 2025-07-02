function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buton = document.querySelector(".change-color");
const pEl = document.querySelector(".color");
const body = document.querySelector("body");

function changeColor() {
  const newColor = getRandomHexColor();
  // Butona tıklayınca verilen rengi span ve html üzerine yazdırıyoruz.
  pEl.textContent = newColor;
  // Butona tıklandığında arka plan rengini değiştiriyoruz.
  body.style.backgroundColor = newColor;
}

buton.addEventListener("click", changeColor);
