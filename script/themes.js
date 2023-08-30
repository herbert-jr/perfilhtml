const btnThemes = document.querySelector("#btnThemes");
const listTheme = document.querySelector("#listTheme");

const defaultTheme = document.querySelector("#default");
const darkTheme = document.querySelector("#dark");
const chocotTheme = document.querySelector("#choco");
const pasteltTheme = document.querySelector("#pastel");
const florestTheme = document.querySelector("#florest");

const body = document.querySelector("body");

const setupTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
};

btnThemes.addEventListener("click", function () {
  listTheme.classList.toggle("ShowTheme");
  btnThemes.classList.toggle("openMenuNav");
});

const setTheme = (theme) => {
  body.removeAttribute("class");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
};

document.addEventListener("DOMContentLoaded", setupTheme);

defaultTheme.addEventListener("click", function () {
  setTheme("default");
});
darkTheme.addEventListener("click", function () {
  setTheme("dark");
});
chocotTheme.addEventListener("click", function () {
  setTheme("choco");
});
pasteltTheme.addEventListener("click", function () {
  setTheme("pastel");
});
florestTheme.addEventListener("click", function () {
  setTheme("florest");
});
