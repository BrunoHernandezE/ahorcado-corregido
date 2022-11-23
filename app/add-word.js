let wordsList = localStorage.getItem("words")
wordsList = JSON.parse(wordsList)
const addWordButton = document.querySelector(".buttons--add-word");
const returnButton = document.querySelector(".buttons--return");
const wordToAdd = document.querySelector(".word-to-add");

addWordButton.addEventListener("click", () => {
  wordsList.push(wordToAdd.value)
  localStorage.setItem("words", JSON.stringify(wordsList))
  console.log(wordsList);
})

returnButton.addEventListener("click", () => {
  location.href = "../index.html";
});