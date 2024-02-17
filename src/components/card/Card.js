import React, { useState } from "react";
import "./Card.css";

function Card({ title }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click action
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <input
          className="input-sens"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input sens.."
        />
        <div className="output">Output: {inputValue}</div>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>
          VALORANT TO CS
        </button>
        <button className="button" onClick={handleButtonClick}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Card;
