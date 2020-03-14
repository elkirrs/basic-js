module.exports = function countCats(matrix) {
  let cat = 0;
  for (let i = 0; i < matrix.length; i++) {
    arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == "^^") {
        cat++
      }
    }
  }
  return cat;
};
