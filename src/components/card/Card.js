import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ title, navigation_title }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleConvertClick = () => {
    const result = (Number(inputValue) / 3.182).toFixed(4);
    setOutputValue(result);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleResetClick = () => {
    setInputValue("");
    setOutputValue("");
  };

  const handleNavigateClick = () => {
    navigate("/val-to-cs2", { replace: false });
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <input
          className="input-sens"
          type="number"
          step="0.000001"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input sens.."
        />
        <div className="output">Output: {outputValue}</div>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleConvertClick}>
          CONVERT
        </button>
        <button className="button" onClick={handleResetClick}>
          RESET
        </button>
        <button className="button" onClick={handleNavigateClick}>
          {navigation_title}
        </button>
      </div>
    </div>
  );
}

export default Card;
