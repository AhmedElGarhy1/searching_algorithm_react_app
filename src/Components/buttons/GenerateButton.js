import React, { useState, useRef } from "react";

const GenerateButton = ({ setSteps, generateArray, isDisabled }) => {
  const [input, setInput] = useState(50);
  const inputField = useRef();
  const handleChange = (e) => {
    let temp = e.target.value;
    setInput(temp < 10 ? 10 : temp);
  };
  const handleClick = () => {
    if (isDisabled) return;
    let bars = document.querySelectorAll(".bar");
    bars && bars.forEach((bar) => bar.classList.remove("active"));
    generateArray(input);
    setSteps(0);
  };
  return (
    <div className="btn-group">
      <div style={{ textAlign: "center", paddingRight: "10px" }}>{input}</div>
      <input value={input} type="range" onChange={handleChange} />
      <div
        ref={inputField}
        onClick={handleClick}
        className={!isDisabled ? "btn" : "disabled"}
        style={{ display: "block" }}
      >
        GenerateBars
      </div>
    </div>
  );
};

export default GenerateButton;
