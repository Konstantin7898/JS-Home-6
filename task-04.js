const span = document.querySelector("#value");
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

incrBtn.addEventListener("click", () => {
  let counterValue = parseInt(span.textContent);
  counterValue += 1;
  span.textContent = counterValue;
});

decrBtn.addEventListener("click", () => {
  let counterValue = parseInt(span.textContent);
  counterValue -= 1;
  span.textContent = counterValue;
});
