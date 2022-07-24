const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
// const itemEl = document.createElement("li");
// itemEl.classList.add("item");
// itemEl.textContent = "Список ингридиентов";
// console.log(itemEl);
const fragment = document.createDocumentFragment();

ingredients.forEach((name) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.innerText = name;
  fragment.appendChild(item);
});

list.appendChild(fragment);
