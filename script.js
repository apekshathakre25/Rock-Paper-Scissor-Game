const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");

let userScore = localStorage.getItem("userScore")
  ? parseInt(localStorage.getItem("userScore"))
  : 0;
let computerScore = localStorage.getItem("computerScore")
  ? parseInt(localStorage.getItem("computerScore"))
  : 0;


userScoreElement.textContent = userScore;
computerScoreElement.textContent = computerScore;
const rulesButton = document.querySelector(".rules-button");
const closeButton = document.querySelector(".close-button");
const rulesPage = document.querySelector(".rules-page");
const rockImage = document.querySelector(".rock img");
const scissorImage = document.querySelector(".scissor img");
const paperImage = document.querySelector(".paper img");
const userHandImage = document.getElementById("user-image");
const pcHandImage = document.getElementById("pc-image");
const pickOne = document.querySelector(".choose-one");
const user = document.querySelector(".user-winner");
const pc = document.querySelector(".pc-winner");
const nextButton = document.querySelector(".next-button");
const resultContainer = document.getElementById("result-container")

rulesPage.style.display = "none";
nextButton.style.display = "none";
resultContainer.style.display = "none";

rulesButton.addEventListener("click", openRule);
closeButton.addEventListener("click", closeRule);

function openRule() {
  rulesPage.style.display = "block";
}

function closeRule() {
  rulesPage.style.display = "none";
}

rockImage.addEventListener("click", () => playGame("rock"));
scissorImage.addEventListener("click", () => playGame("scissor"));
paperImage.addEventListener("click", () => playGame("paper"));

function playGame(userChoice) {
  pickOne.style.display = "none";

  const pcChoices = ["rock", "paper", "scissor"];
  const pcChoice = pcChoices[Math.floor(Math.random() * pcChoices.length)];

  userHandImage.src = `images/${userChoice}.png`;
  userHandImage.alt = userChoice;
  userHandImage.style.display = "block";
  resultContainer.style.display = "none";

  pcHandImage.src = `images/${pcChoice}.png`;
  pcHandImage.alt = pcChoice;
  pcHandImage.style.display = "block";

  determineWinner(userChoice, pcChoice);
}

function determineWinner(userChoice, pcChoice) {
  const userScoreElement = document.getElementById("userScore");
  const computerScoreElement = document.getElementById("computerScore");

  if (
    (userChoice === "rock" && pcChoice === "scissor") ||
    (userChoice === "scissor" && pcChoice === "paper") ||
    (userChoice === "paper" && pcChoice === "rock")
  ) {

    userScore++;
    userScoreElement.textContent = userScore;
    document.getElementById("win-result").innerHTML = "YOU WIN!";
    pc.style.display = "none";
    user.style.display = "flex";
    nextButton.style.display = "flex";
  } else if (
    (pcChoice === "rock" && userChoice === "scissor") ||
    (pcChoice === "scissor" && userChoice === "paper") ||
    (pcChoice === "paper" && userChoice === "rock")
  ) {

    computerScore++;
    computerScoreElement.textContent = computerScore;
    document.getElementById("win-result").innerHTML = "YOU LOST!";
    user.style.display = "none";
    pc.style.display = "flex";
    nextButton.style.display = "none";
  } else {

    document.getElementById("win-result").innerHTML = "YOU ARE TIED!";
    user.style.display = "none";
    pc.style.display = "none";
    nextButton.style.display = "none";
  }

  resultContainer.style.display = "flex";
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
}

nextButton.addEventListener("click", () => {
  document.querySelector(".upper-section").style.display = "none";
  document.querySelector(".choose-one").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  nextButton.style.display = "none";
  document.querySelector(".container").style.display = "flex";
  document.getElementById("new-game").style.display = "flex";
});


const playAgainButton = document.getElementById("new-game");
playAgainButton.addEventListener("click", playAgain);

function playAgain() {
  document.querySelector(".choose-one").style.display = "flex";
  document.getElementById("result-container").style.display = "none";
  userHandImage.style.display = "none";
  pcHandImage.style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  const startAgainButton = document.getElementById("startAgain");
  startAgainButton.addEventListener("click", startAgain);

  function startAgain() {
    document.querySelector(".choose-one").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".upper-section").style.display = "flex";

  }
}, false
);