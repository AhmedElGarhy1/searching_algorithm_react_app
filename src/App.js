import React, { useState, useEffect } from "react";
import Bars from "./Components/Bars";
import GenerateButton from "./Components/buttons/GenerateButton";
import BubbleSortButton from "./Components/buttons/BubbleSortButton";
import { generate } from "./Algorithms/generate";
import { bubbleSort } from "./Algorithms/bubbleSort";
import { selectionSort } from "./Algorithms/selectionSort";
import ClearButton from "./Components/buttons/ClearButton";
import SelectionSortButton from "./Components/buttons/SelectionSortButton";

function App() {
  const [array, setArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [handles, setHandles] = useState([]);
  const [steps, setSteps] = useState(0);
  const setDisabled = (bool) => setIsDisabled(bool);
  const generateArray = (num) => {
    generate(num, setArray);
  };
  const makeBubbleSort = () => {
    const temps = bubbleSort(setSteps);
    setHandles(temps);
  };
  const makeSelectionSort = () => {
    const temps = selectionSort(setSteps);
    setHandles(temps);
  };
  useEffect(() => {
    generateArray(50, setArray);
  }, []);

  return (
    <div className="App">
      <div className="all-buttons">
        <GenerateButton
          setSteps={setSteps}
          isDisabled={isDisabled}
          generateArray={generateArray}
        />
        <BubbleSortButton
          isDisabled={isDisabled}
          setDisabled={setDisabled}
          makeBubbleSort={makeBubbleSort}
        />
        <SelectionSortButton
          makeSelectionSort={makeSelectionSort}
          isDisabled={isDisabled}
          setDisabled={setDisabled}
        />
        <ClearButton
          isDisabled={isDisabled}
          setSteps={setSteps}
          setDisabled={setDisabled}
          handles={handles}
        />
      </div>
      <Bars steps={steps} isDisabled={isDisabled} array={array} />
    </div>
  );
}

export default App;
