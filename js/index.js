const menu = document.getElementById("burger");
const nav = document.querySelector("nav");
menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
