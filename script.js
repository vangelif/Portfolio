let btn = document.querySelector("#btn-menu");

btn.addEventListener("click", function () {
  let menu = document.querySelector(".btn-menu");
  menu.style.display = "flex";
});

let xBtn = document.querySelector(".fa-xmark");

xBtn.addEventListener("click", function () {
  let menu = document.querySelector(".btn-menu");
  menu.style.display = "none";
});

let portfolioLink = document.querySelector("#portfolio-link");
let aboutLink = document.querySelector("#about-link");
let contactLink = document.querySelector("#contact-link");

portfolioLink.addEventListener("click", () => {
  let menu = document.querySelector(".btn-menu");
  menu.style.display = "none";
});

aboutLink.addEventListener("click", () => {
  let menu = document.querySelector(".btn-menu");
  menu.style.display = "none";
});

contactLink.addEventListener("click", () => {
  let menu = document.querySelector(".btn-menu");
  menu.style.display = "none";
});
