const scorePlayerOneElement = document.querySelector(".score-player-one");
const scorePlayerTwoElement = document.querySelector(".score-player-two");

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

scorePlayerOneElement.textContent = scorePlayerOne;
scorePlayerTwoElement.textContent = scorePlayerTwo;

const maxScoreElement = document.querySelector("#max-score");
let maxScore = 1;

const increasePlayerOneScore = document.querySelector(".increase-player-one");
const increasePlayerTwoScore = document.querySelector(".increase-player-two");
const resetBtn = document.querySelector(".reset");

maxScoreElement.addEventListener("input", function () {
  maxScore = maxScoreElement.value;
});

const increaseScoreOne = () => {
  if (scorePlayerOne + 1 != maxScore) {
    scorePlayerOne++;
    scorePlayerOneElement.textContent = scorePlayerOne;
  } else {
    scorePlayerOne++;
    scorePlayerOneElement.textContent = scorePlayerOne;
    scorePlayerOneElement.classList.add("winner");
    scorePlayerTwoElement.classList.add("loser");
    increasePlayerOneScore.disabled = true;
    increasePlayerTwoScore.disabled = true;
  }
};

const increaseScoreTwo = () => {
  if (scorePlayerTwo + 1 != maxScore) {
    scorePlayerTwo++;
    scorePlayerTwoElement.textContent = scorePlayerTwo;
  } else {
    scorePlayerTwo++;
    scorePlayerTwoElement.textContent = scorePlayerTwo;
    scorePlayerTwoElement.classList.add("winner");
    scorePlayerOneElement.classList.add("loser");
    increasePlayerOneScore.disabled = true;
    increasePlayerTwoScore.disabled = true;
  }
};

const reset = () => {
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  maxScore = 1;
  maxScoreElement.value = 1;
  increasePlayerOneScore.disabled = false;
  increasePlayerTwoScore.disabled = false;
  scorePlayerOneElement.classList.remove("winner", "loser");
  scorePlayerTwoElement.classList.remove("winner", "loser");

  scorePlayerOneElement.textContent = scorePlayerOne;
  scorePlayerTwoElement.textContent = scorePlayerTwo;
};

increasePlayerOneScore.addEventListener("click", increaseScoreOne);
increasePlayerTwoScore.addEventListener("click", increaseScoreTwo);
resetBtn.addEventListener("click", reset);
