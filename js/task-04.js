const decrementBtn = document.querySelector("[data-action = 'decrement']");
const incrementBtn = document.querySelector("[data-action = 'increment']");
const containerValue = document.querySelector("#value");
let value = 0;
decrementBtn.addEventListener("click", () => {
  value -= 1;
  containerValue.textContent = value;
});
incrementBtn.addEventListener("click", () => {
  value += 1;
  containerValue.textContent = value;
});
