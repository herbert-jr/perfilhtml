const btnToggleMenu = document.querySelector("#btnToggleNav");
const listNav = document.querySelector("#listNav");

btnToggleMenu.addEventListener("click", function () {
  listNav.classList.toggle("openMenuNav");
  btnToggleMenu.classList.toggle("openMenuNav");
});
