const validationInputEl = document.querySelector("#validation-input");
validationInputEl.addEventListener("blur", () => {
  const checkCurrentlength = parseInt(
    validationInputEl.getAttribute("data-length")
  );
  const inputValue = validationInputEl.value.length;
  if (inputValue === checkCurrentlength) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
});
