type stepType = Array<[number, number, boolean]>;
export class Sorter {
    static swap(array: number[], i: number, j: number) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    static getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    static bubbleSort(originalArray: number[]) {
        let array: number[] = originalArray.slice();
        let steps: stepType = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                let cond = array[j + 1] < array[j];
                if (cond) {
                    Sorter.swap(array, j, j + 1);
                    steps.push([j, j + 1, false]);
                }
                steps.push([j, j + 1, cond]);
            }
        }
        return steps;
    }

    static insertionSort(originalArray: number[]): stepType {
        let array: number[] = originalArray.slice();
        let steps: stepType = [];
        for (let i = 1; i < array.length; i++) {
            let j = i;
            steps.push([-1, i, false]);
            let value = array[i];
            while (j > 0 && array[j - 1] > value) {
                array[j] = array[j - 1];
                steps.push([i, j, false]);
                steps.push([j, j - 1, true]);
                j--;
            }
            array[j] = value;
        }
        return steps;
    }


    static selectionSort(originalArray: number[]): stepType {
        let array: number[] = originalArray.slice();
        let steps: stepType = [];
        for (let i = 0; i < array.length; i++) {
            let minimal_ind = i;
            for (let j = i; j < array.length; j++) {
                steps.push([j, minimal_ind, false])
                if (array[j] < array[minimal_ind]) {
                    minimal_ind = j;
                }
            }
            Sorter.swap(array, minimal_ind, i);
            steps.push([minimal_ind, i, true]);
        }
        return steps;
    }

    static merge(array: number[], start: number, end: number, steps: stepType): number[] {
        let result: number[] = [];
        let middle = ((start + end) / 2) | 0;
        let i = start;
        let j = middle + 1;
        while (i <= middle && j <= end) {
            if (array[i] < array[j]) {
                result.push(array[i]);
                i += 1;
            } else {
                result.push(array[j]);
                j += 1;
            }
        }
        while (i <= middle) {
            result.push(array[i]);
            i += 1;
        }
        while (j <= end) {
            result.push(array[j]);
            j += 1;
        }
        let ind = 0;
        for (let i = start; i <= end; i++) {
            steps.push([-1, i, false]);
            array[i] = result[ind];
            Sorter.tempArray.push(array.slice());
            ind++;
        }
        return [start, end];
    }
    static tempArray = [];

    static mergeSortRecursive(array: number[], start: number, end: number, steps: stepType): number[] {
        if (end - start < 1) {
            return [start, end];
        } else {
            let middle = ((start + end) / 2) | 0;
            return Sorter.merge(array, Sorter.mergeSortRecursive(array, start, middle, steps)[0],
                Sorter.mergeSortRecursive(array, middle + 1, end, steps)[1], steps);
        }
    }

    static mergeSort(array: number[]): stepType {
        let steps: stepType = [];
        Sorter.tempArray = [];
        Sorter.mergeSortRecursive(array.slice(), 0, array.length - 1, steps);
        return steps;
    }
}
