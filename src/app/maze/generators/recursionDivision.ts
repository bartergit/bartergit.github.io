import { getRandomInt, stepsType, gridType } from './help'
function recursiveDivide(x1: number, x2: number, y1: number, y2: number, flag: boolean, steps: stepsType) {
    const height = y2 - y1;
    const width = x2 - x1;
    if (height < 1) return;
    if (width < 1) return;
    flag = !flag;
    if (flag) {
        let h = getRandomInt(x1, x2);
        let w = getRandomInt(y1, y2);
        steps.push([[h, y1 - 1], [h, w], true])
        steps.push([[h, w + 1], [h, y2], true])
        recursiveDivide(x1, h, y1, y2, flag, steps);
        recursiveDivide(h + 1, x2, y1, y2, flag, steps);
    } else {
        let h = getRandomInt(x1, x2);
        let w = getRandomInt(y1, y2);
        steps.push([[x1 - 1, w], [h, w], true])
        steps.push([[h + 1, w], [x2, w], true])
        recursiveDivide(x1, x2, y1, w, flag, steps);
        recursiveDivide(x1, x2, w + 1, y2, flag, steps);
    }
}

export function recursionDivision(N: number): stepsType {
    let steps = [];
    recursiveDivide(0, N, 0, N, true, steps);
    return steps;
}