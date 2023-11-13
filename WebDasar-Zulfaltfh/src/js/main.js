//JQuery for toggle dropdown menu
const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector(".open-btn");
const closeMenuBtn = document.querySelector(".close-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitioned", function() {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", function() {
    this.closest(".dropdown").classList.toggle("active");
  });
});

