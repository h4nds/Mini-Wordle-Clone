import React, { useState } from "react";
import Row from "./Row";
import "./App.css";
import './index.css';

const App = () => {
  const [guesses, setGuesses] = useState([]); // Initialize as an array
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const targetWord = "dodge"; // Example target word
  const maxAttempts = 6;

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length <= 5) {
      setCurrentGuess(value);
    }
    setCurrentGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== 5) {
      alert("Please enter a 5-letter word");
    } else if (guesses.includes(currentGuess)) {
      alert("You already guessed that word");
    } else {
      const updatedGuesses = [...guesses, currentGuess];
      setGuesses(updatedGuesses);
      setCurrentGuess("");

      if (currentGuess === targetWord || updatedGuesses.length >= maxAttempts) {
        setIsGameOver(true);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <header className="App-header">
          <img src={"doubble-U.png"} className="App-logo" alt="logo" />
          <h1>Wurdle!</h1>
          <div className="paragraph-container">
            <p>Try to Guess the 5-letter word</p>
            <p>Guesses Remaining: {maxAttempts - guesses.length}</p>
            <p>Hint: You gotta Move!!!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={currentGuess}
              onChange={handleInputChange}
              maxLength={5}
              disabled={isGameOver}
              className="guess-input"
            />
            <button type="submit" disabled={isGameOver} className="button">Submit</button>
          </form>
          {guesses.map((guess, index) => (
            <Row key={index} guess={guess} targetWord={targetWord} />
          ))}
          {isGameOver && <p>Game Over! The word was {targetWord}</p>}
        </header>
      </div>
      <div className="footer">
        <p>This is a wordle clone using the React JS framework and tailwind css. Please feel free to contact my GitHub with any questions or concerns.</p>
      </div>
    </div>
  );
};

export default App;