function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.body;
const textColor = document.querySelector(".color");
const bottonEl = document.querySelector(".change-color");

bottonEl.addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  textColor.textContent = changeColor;
});