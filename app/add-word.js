import { words } from "./words.js";
const addWordButton = document.querySelector(".buttons--add-word");
const returnButton = document.querySelector(".buttons--return");
const wordToAdd = document.querySelector(".word-to-add");

addWordButton.addEventListener("click", () => {
  console.log(wordToAdd.value);
  console.log(words);
})

returnButton.addEventListener("click", () => {
  location.href = "../index.html";
});