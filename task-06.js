const textInput = document.querySelector("#validation-input");
const expectedLength = parseInt(textInput.dataset.length);

textInput.addEventListener("blur", () => {
  const actualLength = textInput.value.length;

  if (actualLength !== expectedLength) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
});
