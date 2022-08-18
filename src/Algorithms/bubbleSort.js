export const bubbleSort = (setSteps, fun) => {
  let bars = document.querySelectorAll(".bar");
  const length = bars.length - 1;
  let counter = 0;
  let handle;
  let handles = [];
  const speed = length > 75 ? 10 : 85 - length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      handle = setTimeout(() => {
        bars[j - 1] && bars[j - 1].classList.remove("active");
        bars[j].classList.add("active");
        bars[j + 1].classList.add("active");
        if (
          parseInt(bars[j].getAttribute("data-height")) >
          parseInt(bars[j + 1].getAttribute("data-height"))
        ) {
          let temp1 = bars[j].getAttribute("data-height");
          let temp2 = bars[j + 1].getAttribute("data-height");
          bars[j].setAttribute("data-height", temp2);
          bars[j].style.height = `${temp2}%`;
          bars[j + 1].setAttribute("data-height", temp1);
          bars[j + 1].style.height = `${temp1}%`;
        }
      }, counter * speed);
      setSteps((pre) => pre + 1);
      counter++;
      handles.push(handle);
    }
  }
  return handles;
};
