const inputNameEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
inputNameEl.addEventListener("input", (event) => {
  const inputText = event.target.value;
  nameOutputEl.textContent = inputText === "" ? "Anonymous" : inputText;
});
