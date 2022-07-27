const span = document.querySelector("#value");
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

incrBtn.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});
