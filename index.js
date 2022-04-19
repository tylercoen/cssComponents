"use strict";
//Question accordion function.
const questions = document.querySelectorAll(".item");

document.querySelector(".accordion").addEventListener("click", function (e) {
  const clicked = e.target.closest(".item");
  if (clicked.classList.contains("open")) {
    // console.log(`It's already open dummy`);
    return;
  } else {
    questions.forEach((question) => {
      question.classList.remove("open");
      clicked.classList.add("open");
    });
  }
  // console.log("You clicked in the accordion");
});
