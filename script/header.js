const header = document.querySelector("#header");

window.addEventListener("scroll", function () {
  header.classList.toggle("scrollY", window.scrollY > 0);
});
