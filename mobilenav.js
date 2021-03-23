// Mobile menu
const get = (element) => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");
let content = get("content");
console.log(content);

open.addEventListener("click", () => {
  nav.classList.add("open-nav");
  content.style.opacity = 0.4;
});

exit.addEventListener("click", () => {
  nav.classList.remove("open-nav");
  content.style.opacity = 1;
});
