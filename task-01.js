const categories = document.querySelector("ul#categories");
const childrenCount = categories.children.length;

console.log(`В списке ${childrenCount} категории.`);
console.log("\n");

HTMLCollection.prototype.forEach = Array.prototype.forEach;

categories.children.forEach((child) => {
  const category = child.firstElementChild.innerText;
  const elementsQuantity = child.lastElementChild.children.length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementsQuantity}`);
  console.log("\n");
});
