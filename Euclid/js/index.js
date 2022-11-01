'use strict';
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav-block");
let menuLinks = document.querySelectorAll(".header__nav-items");
let headerSearch = document.querySelector(".header__search");
let headerBtn = document.querySelector(".header__btn");
let headerBtnClose = document.querySelector(".header__button-close");
let headerLogo = document.querySelector(".header__logo");

const mediaQuery768 = window.matchMedia("(max-width:768px)");
const mediaQuery500 = window.matchMedia("(max-width:500px)");
const mediaQuery1024 = window.matchMedia("(max-width:1024px)");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_active");
  menu.classList.toggle("header__nav_active");
  document.body.classList.toggle("stop_scroll");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("header__burger_active");
  menu.classList.remove("header__nav_active");
  document.body.classList.remove("stop_scroll");
  });

});

headerBtn.addEventListener("click", function () {
  headerSearch.style.display = "flex";
  headerBtn.style.display = "none";
  if (mediaQuery768.matches) {
    headerLogo.style.display = "none";
  }
  if (mediaQuery500.matches) {
    burger.style.display = "none";
  }
});

headerBtnClose.addEventListener("click", function () {
  headerSearch.style.display = "none";
  headerBtn.style.display = "block";
  headerLogo.style.display = "block";
  if (mediaQuery500.matches) {
    burger.style.display = "block";
    console.log("burger display");
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
