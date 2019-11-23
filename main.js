const btn = document.querySelector("button");
const lists = document.querySelectorAll("li");
let fontSize = 10;

/* classic loop
btn.addEventListener("click", () => {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.display = "block";
    lists[i].style.fontSize = `${fontSize}px`;
  };
  fontSize++;
});
*/

// forEach
btn.addEventListener("click", () => {
  lists.forEach((list) => {
    list.style.display = "block";
    list.style.fontSize = `${fontSize}px`;
  });
  fontSize++;
});
