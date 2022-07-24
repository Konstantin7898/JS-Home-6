const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  //   console.log(textInput.value.length);
  if (textInput.dataset.length > textInput.value.length) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
});
