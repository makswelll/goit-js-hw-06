const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("#ingredients");
const itemAddEl = [];
ingredients.forEach((ingredien) => {
  const itemOflist = document.createElement("li");
  itemOflist.textContent = ingredien;
  itemOflist.classList.add("item");
  itemAddEl.push(itemOflist);
});
ingredientsListEl.append(...itemAddEl);
