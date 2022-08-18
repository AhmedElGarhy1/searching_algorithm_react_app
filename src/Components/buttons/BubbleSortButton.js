import React, { useState } from "react";

const BubbleSortButton = ({ makeBubbleSort, setDisabled, isDisabled }) => {
  const handleClick = () => {
    if (isDisabled) return;
    makeBubbleSort();
    setDisabled(true);
  };
  return (
    <div onClick={handleClick} className={!isDisabled ? "btn" : "disabled"}>
      BubbleSortButton
    </div>
  );
};

export default BubbleSortButton;
