import { getRandomInt, stepsType, gridType } from './help'
function getNearCells(grid: gridType, cell: [number, number]): [number, number] | null {
  let freeCells: Array<[number, number]> = [];
  let i: number = cell[0];
  let j: number = cell[1];
  if (i + 1 < grid.length && grid[i + 1][j] == null) {
    freeCells.push([i + 1, j]);
  }
  if (j + 1 < grid[0].length && grid[i][j + 1] == null) {
    freeCells.push([i, j + 1]);
  }
  if (i - 1 >= 0 && grid[i - 1][j] == null) {
    freeCells.push([i - 1, j]);
  }
  if (j - 1 >= 0 && grid[i][j - 1] == null) {
    freeCells.push([i, j - 1]);
  }
  if (freeCells.length == 0)
    return null;
  return freeCells[getRandomInt(0, freeCells.length)];
}

function recursiveFunction(grid: gridType, cell: [number, number], steps: stepsType, n: number, i = 0) {
  let nearCell = getNearCells(grid, cell);
  i++;
  if (nearCell == null) {
    if (i > 2 * n * n) {
      return;
    }
    else {
      steps.push([cell, grid[cell[0]][cell[1]], false]);
      recursiveFunction(grid, grid[cell[0]][cell[1]], steps, n, i);
    }
  }
  else {
    grid[nearCell[0]][nearCell[1]] = cell;
    steps.push([cell, nearCell, true]);
    recursiveFunction(grid, nearCell, steps, n, i);
  }
}

export function randomizedDepthFirstSearch(N: number): stepsType { //add correct end point
  let steps = [];
  let grid = new Array(N);
  for (let i = 0; i < N; i++) {
    grid[i] = new Array(N);
  }
  recursiveFunction(grid, [0, 0], steps, N);
  return steps;
}