const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    array = array.concat(matrix[i]);
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "^^") count++;
  }
  return count;
};
