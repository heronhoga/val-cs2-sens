import React from "react";
import "./CsVal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/card/Card";

function CsVal() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const navigate = useNavigate();

  const handleConvertClick = () => {
    const result = (Number(inputValue) / 3.182).toFixed(4);
    setOutputValue(result);
  };

  const handleResetClick = () => {
    setInputValue("");
    setOutputValue("");
  };

  const handleNavigateClick = () => {
    navigate("/val-to-cs2", { replace: false });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="containerCsval">
      <div className="convertCard">
        <Card
          title="Convert CS2 Sensitivity to Valorant"
          navigation_title="VALORANT SENS TO CS2"
          convertFunction={handleConvertClick}
          resetFunction={handleResetClick}
          navigateFunction={handleNavigateClick}
          changeFunction={handleInputChange}
          inputValue={inputValue}
          outputValue={outputValue}
        />
      </div>
    </div>
  );
}

export default CsVal;
