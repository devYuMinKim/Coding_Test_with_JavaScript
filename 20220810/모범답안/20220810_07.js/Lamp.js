/**
 * @param field {number[][]}
 * @param n {number}
 * @return {number}
 */
function solution(field, n) {
  const fieldRow = field.length;
  const fieldCol = field[0].length;
  const rowSize = fieldRow - n + 1;
  const colSize = fieldCol - n + 1;

  let ret = 0;
  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      ret = Math.max(ret, countPlant(field, n, row, col));
    }
  }

  return ret;
}

function countPlant(field, n, row, col) {
  let plantCount = 0;

  for (let curRow = row; curRow < row + n; curRow++) {
    for (let curCol = col; curCol < col + n; curCol++) {
      plantCount += field[curRow][curCol];
    }
  }

  return plantCount;
}

solution
