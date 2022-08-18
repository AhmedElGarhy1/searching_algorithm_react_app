export const selectionSort = (setSteps) => {
  let bars = document.querySelectorAll(".bar");
  const length = bars.length;
  const speed = length > 75 ? 10 : 85 - length;
  let counter = 0;
  let handle;
  let handles = [];
  for (let i = 0; i < length; i++) {
    let big = i;
    let starter, firstVal;
    for (let j = i + 1; j < length; j++) {
      setSteps((pre) => pre + 1);
      handle = setTimeout(() => {
        let current = parseInt(bars[j].getAttribute("data-height"));
        if (j === i + 1) {
          starter = parseInt(bars[i].getAttribute("data-height"));
          firstVal = starter;
        }
        bars[j - 1] && bars[j - 1].classList.remove("active");
        bars[i].classList.add("active");
        bars[j].classList.add("active");
        if (j === length - 1 && i !== length - 2)
          bars[j].classList.remove("active");
        if (current < starter) {
          starter = current;
          bars[big].classList.remove("yellow");
          big = j;
          bars[big].classList.add("yellow");
        }
        if (j === length - 1) {
          if (big !== i && starter < firstVal) {
            bars[i] && bars[i].setAttribute("data-height", starter);
            bars[i] && (bars[i].style.height = `${starter}%`);
            bars[big] && bars[big].setAttribute("data-height", firstVal);
            bars[big] && (bars[big].style.height = `${firstVal}%`);
            bars[big].classList.remove("yellow");
          }
        }
      }, counter * speed);
      counter++;
      handles.push(handle);
    }
  }
  return handles;
};

// bars[i].setAttribute("data-height", now);
// bars[i].style.height = `${now}%`;
// bars[j].setAttribute("data-height", starter);
// bars[j].style.height = `${starter}%`;
