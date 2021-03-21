const buttons = document.querySelectorAll(".btn-join");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

for (let i = 0; i <= buttons.length; i++) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("show-modal");
    });
  });
}

close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
