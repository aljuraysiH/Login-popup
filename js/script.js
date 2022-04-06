"use strict";

const btn = document.querySelector(".log-button");
const btnClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup-overlay");

btn.addEventListener("click", function () {
  popup.classList.add("active");
  popupOverlay.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  popup.classList.remove("active");
  popupOverlay.classList.add("hidden");
});
popupOverlay.addEventListener("click", function () {
  popup.classList.remove("active");
  popupOverlay.classList.add("hidden");
});
