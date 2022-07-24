const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log("это сабмит формы");
  const data = {};
  const { elements } = event.currentTarget;

  if (elements.email.value === "" || elements.password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  console.log(elements);

  data[elements.email.name] = elements.email.value;
  data[elements.password.name] = elements.password.value;
  console.log(data);

  // console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
