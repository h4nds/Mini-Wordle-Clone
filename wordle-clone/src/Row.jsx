import React, { useState, useEffect } from "react";
import "./Row.css"

const Row = ({ guess, targetWord }) => {
  const [letterStatuses, setLetterStatuses] = useState([]);

  useEffect(() => {
    // Update letter statuses when guess changes
    const newStatuses = guess.split("").map((letter, index) => {
      if (letter === targetWord[index]) {
        return "correct";
      } else if (targetWord.includes(letter)) {
        return "present";
      } else {
        return "absent";
      }
    });
    setLetterStatuses(newStatuses);
  }, [guess, targetWord]);

  return (
    <div className="word-row">
      {guess.split("").map((letter, index) => (
        <span 
          key={index} 
          className={`letter ${letterStatuses[index] || ''}`}
          aria-label={`Letter ${letter}, status: ${letterStatuses[index] || 'empty'}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Row;