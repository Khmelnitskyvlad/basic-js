const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      i === 0 &&
      (arr[i] === "--discard-prev" || arr[i] === "--double-prev")
    ) {
      continue;
    } else if (
      i === arr.length - 1 &&
      (arr[i] === "--discard-next" || arr[i] === "--double-next")
    ) {
      continue;
    } else if (arr[i] === "--discard-next") {
      i = i + 1;
    } else if (arr[i] === "--discard-prev" && arr[i - 2] === "--discard-next") {
      continue;
    } else if (arr[i] === "--discard-prev") {
      newArr.pop();
    } else if (arr[i - 2] === "--discard-next" && arr[i] === "--double-prev") {
      continue;
    } else if (arr[i] === "--double-next") {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      newArr.push(newArr[newArr.length - 1]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
