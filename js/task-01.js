const categoriesListEl = document.querySelector("#categories");
const itemEl = categoriesListEl.children;
console.log(`Number of categories: ${itemEl.length}`);
Array.from(itemEl).forEach((item) => {
  const categoriesTitle = item.firstElementChild.textContent;
  const categoriesElem = item.lastElementChild.children;
  console.log(`Categoir: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesElem.length}`);
});
