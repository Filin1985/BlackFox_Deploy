// Allow us by clicking on the "JOIN" button see the regictration form
const buttons = document.querySelectorAll(".btn-join");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// for each button we are adding the click event which adds the show-modal class to tour modal
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

// Allows us close the modal by clicking outside the modal
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
