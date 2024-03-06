const openModalButton = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
