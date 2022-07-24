const targetBtn = document.querySelector(".change-color");
console.log(targetBtn);
const span = document.querySelector(".color");
console.log(span);

targetBtn.addEventListener("click", () => {
  console.log("клик по change color");
  document.body.style.backgroundColor = [getRandomHexColor()];
  span.textContent = [getRandomHexColor()];
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
});
