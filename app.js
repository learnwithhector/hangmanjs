// const game1 = new Hangman("Car Parts", 7);
// const game1 = new Hangman("New Jersey", 5);
let game1;

const puzzleDisplay = document.getElementById("puzzle-display");
const livesDisplay = document.getElementById("lives-display");

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  game1.getStatus();
  render();
});

const render = () => {
  puzzleDisplay.textContent = game1.puzzle;
  livesDisplay.textContent = game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 12);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
