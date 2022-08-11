/**
 * @param puzzle {string[][]}
 * @param word {string}
 * @returns {boolean}
 */
function solution(puzzle, word) {
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (move(puzzle, word, x, y, 0)) return true;
    }
  }

  return false;
}

const SIZE = 4;
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function move(puzzle, word, x, y, moveIndex) {
  if (puzzle[x][y] !== word[moveIndex]) return false;
  if (moveIndex === word.length - 1) return true;

  puzzle[x][y] = 'x';

  for (const [dx, dy] of DIRECTIONS) {
    const dirX = x + dx;
    const dirY = y + dy;
    if (0 <= dirX && dirX < SIZE && 0 <= dirY && dirY < SIZE) {
      if (move(puzzle, word, dirX, dirY, moveIndex + 1)) return true;
    }
  }

  return false;
}

solution