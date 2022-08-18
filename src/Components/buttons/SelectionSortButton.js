import React from "react";

const SelectionSortButton = ({
  makeSelectionSort,
  setDisabled,
  isDisabled,
}) => {
  const handleClick = () => {
    if (isDisabled) return;
    makeSelectionSort();
    setDisabled(true);
  };
  return (
    <div onClick={handleClick} className={!isDisabled ? "btn" : "disabled"}>
      SelectionSortButton
    </div>
  );
};

export default SelectionSortButton;
