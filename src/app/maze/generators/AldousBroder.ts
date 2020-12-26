import { getRandomInt, stepsType, gridType } from './help'
function getNearCells(grid: gridType, cell: [number, number]): [number, number] | null { // combine
    let freeCells: Array<[number, number]> = [];
    let i: number = cell[0];
    let j: number = cell[1];
    if (i + 1 < grid.length) {
        freeCells.push([i + 1, j]);
    }
    if (j + 1 < grid[0].length) {
        freeCells.push([i, j + 1]);
    }
    if (i - 1 >= 0) {
        freeCells.push([i - 1, j]);
    }
    if (j - 1 >= 0) {
        freeCells.push([i, j - 1]);
    }
    if (freeCells.length == 0)
        return null;
    return freeCells[getRandomInt(0, freeCells.length)];
}

export function AldousBroder(N: number): stepsType {
    let steps = [];
    let grid = new Array(N);
    for (let i = 0; i < N; i++) {
        grid[i] = new Array(N);
    }
    grid[0][0] = true;
    let cell: [number, number] = [0, 0];
    let totalNumber = grid.length * grid[0].length - 1;
    while (totalNumber != 0) {
        let new_cell = getNearCells(grid, cell);
        if (!grid[new_cell[0]][new_cell[1]]) {
            grid[new_cell[0]][new_cell[1]] = true;
            steps.push([cell, new_cell, true]);
            totalNumber--;
        }
        cell = new_cell;
    }
    return steps;
}