"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayContent = (className, message) => {
  document.querySelector(`.${className}`).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess == 0 || guess > 20) {
    alert("Please Enter a value between 1 to 20");
    document.querySelector(".guess").value = "";
  } else if (guess === secretNumber) {
    if (score > highScore) {
      displayContent("highscore", score);
      highScore = score;
    }
    displayContent("message", "Correct Number");
    displayContent("number", secretNumber);
    document.body.style.background = "green";
  } else if (guess !== secretNumber) {
    score--;
    displayContent("score", score);
    if (score > 1)
      displayContent(
        "message",
        guess > secretNumber ? "Target is smaller" : "Target is bigger"
      );
    else displayContent("message", "You Lost");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayContent("number", "?");
  document.querySelector(".guess").value = "";
  score = 20;
  displayContent("score", score);
  displayContent("message", "Start guessing ...");

  document.body.style.background = "black";
});
