const targetBtn = document.querySelector("#value");
const valueEl = Number(document.querySelector("#value").textContent);
const counterValue = document.querySelector("#value");

const parentDivEL = document.querySelector("#counter");
const decrBtn = parentDivEL.firstElementChild;
const incrBtn = parentDivEL.lastElementChild;

incrBtn.addEventListener("click", () => {
  valueEl += 1;
  counterValue.innerText = valueEl;
});

decrBtn.addEventListener("click", () => {
  valueEl -= 1;
  counterValue.innerText = valueEl;
});
