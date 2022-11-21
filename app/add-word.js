const addWordButton = document.querySelector(".buttons--add-word")
const returnButton = document.querySelector(".buttons--return")


addWordButton.addEventListener("click", () => {
  console.log(words);
})
returnButton.addEventListener("click", () => {
  location.href = "../index.html";
});