const navlinks = document.querySelector(".nav-links");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.getElementById("menu");
const teamImgs = document.getElementById("team-imgs");

window.addEventListener("load", function () {
  if (window.innerWidth > 1000) teamImgs.classList.remove("full-width");
});

window.addEventListener("resize", function () {
  window.innerWidth < 1000
    ? teamImgs.classList.add("full-width")
    : teamImgs.classList.remove("full-width");
});

mobileMenu.addEventListener("click", (e) => {
  e.target.classList.toggle("change");
  menu.classList.toggle("show");
});

navlinks.addEventListener("click", (e) => {
  mobileMenu.classList.remove("change");
  menu.classList.remove("show");
});
