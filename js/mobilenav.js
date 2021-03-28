// Mobile menu
// Making the utilitie which I will use for getting some DOM element by givint the Id name
const get = (element) => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");
let content = get("content");

open.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.add("open-nav");
});

exit.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("open-nav");
});

// When clicking on the menu item in the mobile-nav it will close the mobile-nav
document.querySelectorAll("#nav li a").forEach((i) => {
  i.addEventListener("click", () => {
    nav.classList.remove("open-nav");
  });
});
