"use strict";

let spinnerBox = document.querySelector(".spinner-container");
let spinner = spinnerBox.querySelector(".spinner");

spinnerBox.addEventListener("click", () => {
  spinner.classList.toggle("stop-animate");
});
