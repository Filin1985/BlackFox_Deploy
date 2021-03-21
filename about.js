let popovers = document.querySelectorAll(".popover");
let popoverTriggers = document.querySelectorAll(".popover_trigger");

for (let i = 0; i < popoverTriggers.length; i++) {
  popoverTriggers[i].addEventListener("click", function (event) {
    closeAllOthers(this.parentElement);
    this.parentElement.classList.toggle("popover_active");
  });
}

function closeAllOthers(ignore) {
  for (let i = 0; i < popovers.length; i++) {
    if (popovers[i] !== ignore) {
      popovers[i].classList.remove("popover_active");
    }
  }
}
