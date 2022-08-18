import React from "react";

const ClearButton = ({ setSteps, setDisabled, handles, isDisabled }) => {
  const handleClick = () => {
    setSteps(0);
    let bars = document.querySelectorAll(".bar");
    bars &&
      bars.forEach((bar) => {
        bar.classList.remove("active");
        bar.classList.remove("yellow");
      });
    setDisabled(false);
    handles.forEach((e) => clearTimeout(e));
  };
  return (
    <div onClick={handleClick} className={isDisabled ? "btn" : "disabled"}>
      Clear
    </div>
  );
};

export default ClearButton;
