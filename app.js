let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Guessing...";

  const guessed = Number(document.querySelector(".guess").value);
  if (guessed === secretNumber) {
    // win condition
    document.querySelector("body").style.backgroundColor = "royalblue";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "🎉You guessed correctly";
    score--;
    document.querySelector(".score").textContent = score;

    // implementing highscore functionality
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (!guessed) {
    // invalid input condition
    document.querySelector(".message").textContent = "❌ No value";
  } else if (guessed > secretNumber) {
    // if guess is greater than secretNumber
    if (score > 0) {
      document.querySelector(".message").textContent = "📉Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // stoppage condition logic
      document.querySelector(".message").textContent = "😢You lost the game";
    }
  } else if (guessed < secretNumber) {
    // if guess is less than secretNumber
    if (score > 0) {
      document.querySelector(".message").textContent = "📈Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // stoppage condition logic
      document.querySelector(".message").textContent = "😢You lost the game";
    }
  }
});

// implementing Restart Functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20; // restore initial values of the score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // generate another random number
  //   document.querySelector(".number").textContent = secretNumber; // set the "number" element to the new secretNumber
  document.querySelector("body").style.backgroundColor = "#222"; // reset style back to the original
  document.querySelector(".number").style.width = "15rem"; // reset style back to the original
  document.querySelector(".message").textContent = "🙂Start Game"; // reset style back to the original
  document.querySelector(".guess").value = ""; // set input value to empty
  document.querySelector(".score").textContent = score;
});
