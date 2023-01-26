class Hangman {
  constructor(word, guessesLeft) {
    this.word = word.toLowerCase().split("");
    this.guessesLeft = guessesLeft;
    this.guessedLetters = [];
    this.status = "playing";
  }
  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      puzzle +=
        this.guessedLetters.includes(letter) || letter === " " ? letter : "*";
    });
    return puzzle;
  }
  makeGuess(guess) {
    if (this.status !== "playing") {
      return;
    }
    guess = guess.toLowerCase();
    const isUniqueGuess = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUniqueGuess) {
      this.guessedLetters.push(guess);
      if (isBadGuess) {
        this.guessesLeft--;
      }
    }
  }
  getStatus() {
    if (this.guessesLeft <= 0) {
      this.status = "failed";
      this.guessesLeft = 0;
    }
    const isSolved = this.word.every((letter) => {
      return this.guessedLetters.includes(letter) || letter === " ";
    });

    if (isSolved) {
      this.status = "finished";
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.guessesLeft}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return "Well done! You guessed the word";
    }
  }
}
