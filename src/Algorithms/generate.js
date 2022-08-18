export const generate = (num, fun) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let temp = Math.ceil((i * 100) / num);
    arr.push(temp);
  }
  for (let i = 0; i < num; i++) {
    let rand = Math.floor(Math.random() * num);
    let temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
  }
  // for (let i = 0; i < num; i++) {
  //   let rand = Math.ceil(Math.random() * num);
  //   let temp = Math.ceil((rand * 100) / num);
  //   arr.push(temp);
  // }
  // console.log(arr);
  fun(arr);
};
