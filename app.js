document.querySelector(".check").addEventListener("click", function () {
  //  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number ❌";
  }
});
