const playGame = document.querySelector(".buttons--play");
const addNewWord = document.querySelector(".buttons--add-word");


playGame.addEventListener("click", () => {
  location.href = "../play-game.html";
});

addNewWord.addEventListener("click", () => {
  location.href = "../add-word.html";
});


