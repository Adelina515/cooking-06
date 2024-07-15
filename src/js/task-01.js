const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

const result = items.length;
console.log("Number of categories:", result);

const categoriesItem = items.forEach((item) => {
  const name = item.querySelector("h2").textContent;
  const numberItem = item.querySelectorAll("ul li").length;
  console.log("Category:", name);
  console.log("Elements:", numberItem);
});
