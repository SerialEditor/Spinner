"use strict";

let spinnerBox = document.querySelector(".spinner-container");
let spinner = spinnerBox.querySelector(".spinner");

spinnerBox.addEventListener("click", () => {
  console.info("Click!");
  spinner.classList.toggle("stop-animate");
});
