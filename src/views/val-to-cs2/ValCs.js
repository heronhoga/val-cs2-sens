import React from "react";
import "./ValCs.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/card/Card";

function ValCs() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const navigate = useNavigate();

  const handleConvertClick = () => {
    const result = (Number(inputValue) * 3.182).toFixed(4);
    setOutputValue(result);
  };

  const handleResetClick = () => {
    setInputValue("");
    setOutputValue("");
  };

  const handleNavigateClick = () => {
    navigate("/cs2-to-val", { replace: false });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="containerValcs">
      <div className="convertCard">
        <Card
          title="Convert Valorant Sensitivity to CS2"
          navigation_title="CS2 SENS TO VALORANT"
          convertFunction={handleConvertClick}
          resetFunction={handleResetClick}
          navigateFunction={handleNavigateClick}
          changeFunction={handleInputChange}
          inputValue={inputValue}
          outputValue={outputValue}
          color="rgb(227, 135, 22)"
        />
      </div>
    </div>
  );
}

export default ValCs;
