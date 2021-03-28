// This code for making it possible to show us the information about each team member on the about page
let popovers = document.querySelectorAll(".popover");
let popoverTriggers = document.querySelectorAll(".popover_trigger");

for (let i = 0; i < popoverTriggers.length; i++) {
  popoverTriggers[i].addEventListener("click", function (event) {
    closeAllOthers(this.parentElement);
    this.parentElement.classList.toggle("popover_active");
  });
}

// This function close all inactive popovers
function closeAllOthers(ignore) {
  for (let i = 0; i < popovers.length; i++) {
    if (popovers[i] !== ignore) {
      popovers[i].classList.remove("popover_active");
    }
  }
}
