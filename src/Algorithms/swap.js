export const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};
