import { getRandomInt, stepsType, gridType } from './help'
function getNearCells(grid: gridType, cell: [number, number]): [number, number] | null { // combine
  let freeCells: Array<[number, number]> = [];
  let i: number = cell[0];
  let j: number = cell[1];
  if (i + 1 < grid.length && grid[i + 1][j] != null) {
    freeCells.push([i + 1, j]);
  }
  if (j + 1 < grid[0].length && grid[i][j + 1] != null) {
    freeCells.push([i, j + 1]);
  }
  if (i - 1 >= 0 && grid[i - 1][j] != null) {
    freeCells.push([i - 1, j]);
  }
  if (j - 1 >= 0 && grid[i][j - 1] != null) {
    freeCells.push([i, j - 1]);
  }
  if (freeCells.length == 0)
    return null;
  return freeCells[getRandomInt(0, freeCells.length)];
}

export function binaryTree(N: number): stepsType {
  let steps = [];
  let grid = new Array(N);
  for (let i = 0; i < N; i++) {
    grid[i] = new Array(N);
  }
  grid[0][0] = true;
  steps.push([[0, 0], [0, 0], false]);  //start -> end, color, progressive: boolean
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i == 0 && j == 0) {
        continue;
      } else {
        let connected = getNearCells(grid, [i, j]);
        steps.push([[i, j], [i, j], false]);
        steps.push([[i, j], connected, true]);
        grid[i][j] = true;
      }
    }
  }
  return steps;
}