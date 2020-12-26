import { Component, ViewChild, ElementRef, Optional } from '@angular/core';
import { Sorter } from './sorter';
import { Draw } from '../draw';

@Component({
  selector: 'visualizer',
  templateUrl: 'vis.html',
  styleUrls: ['vis.css'],
})
export class Visualizer extends Draw {
  sortTypes: ((originalArray: number[]) => [number, number, boolean][])[];
  array: number[];
  steps: Array<[number, number, boolean]>;
  ind: number;
  WIDTH: number;
  HEIGHT: number;
  defaultColor: string;
  activeColor: string;
  backgroundColor: string;
  n: number;
  currentSort: ((originalArray: number[]) => [number, number, boolean][]);


  shuffle() {
    if (this.steps.length == 0) {
      for (let i = 0; i < 30; i++) {
        Sorter.swap(this.array, Sorter.getRandomInt(0, this.array.length), Sorter.getRandomInt(0, this.array.length));
      }
    }
  }

  generateArray() {
    this.stop();
    this.n = Math.max(this.n, 5);
    this.array = [...Array(this.n).keys()].map(x => x + 1);
    this.shuffle();
  }

  constructor() {
    super(7);
    this.sortTypes = [Sorter.bubbleSort, Sorter.insertionSort, Sorter.selectionSort, Sorter.mergeSort];
    this.currentSort = this.sortTypes[3];
    this.n = 100;
    this.steps = [];
    this.ind = 0;
    this.generateArray();
    this.WIDTH = 500;
    this.HEIGHT = 250;
    this.defaultColor = "blue";
    this.activeColor = "red";
    this.backgroundColor = "black";
  }

  ngOnInit() {
    super.ngOnInit();
    this.ctx.canvas.width = this.WIDTH;
    this.ctx.canvas.height = this.HEIGHT;
    this.animate();
  }


  beginSort() {
    this.steps = this.currentSort(this.array);
    this.ind = 0;
    this.animate();
  }

  stop() {
    this.ind = 0;
    this.steps = [];
  }

  update() {
    if (this.ind <= this.steps.length - 1) {
      if (this.currentSort == Sorter.mergeSort) {
        this.array = Sorter.tempArray[this.ind];
      }
      else if (this.steps[this.ind][2]) {
        Sorter.swap(this.array, this.steps[this.ind][0], this.steps[this.ind][1]);
      }
      this.ind++;
    } else {
      this.ind = 0;
      this.steps = [];
    }
  }

  offset() {
    return this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
  }

  calclulatePos(i: number, offset: number) {
    return offset / 2 * (i + 1) + i * offset;
  }

  draw(progress: number) {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.ctx.fillStyle = this.defaultColor;
    let bottomOffset = 10;
    let offset = this.WIDTH / (3 / 2 * this.array.length + 1 / 2);
    let maxHeight = (this.HEIGHT - bottomOffset * 2) / Math.max.apply(null, this.array);

    for (let i = 0; i < this.array.length; i++) {
      if (this.ind > this.steps.length - 1 || i != this.steps[this.ind][0] && i != this.steps[this.ind][1]) {
        this.ctx.fillRect(this.calclulatePos(i, offset), this.HEIGHT - bottomOffset, offset, -maxHeight * this.array[i]);
      }
      else if (this.steps[this.ind][2]) {
        this.ctx.fillStyle = this.activeColor;
        let another = (i == this.steps[this.ind][0]) ? this.steps[this.ind][1] : this.steps[this.ind][0];
        let pos = this.calclulatePos(i, offset) + (this.calclulatePos(another, offset) - this.calclulatePos(i, offset)) * progress;
        this.ctx.fillRect(pos, this.HEIGHT - bottomOffset, offset, -maxHeight * this.array[i]);
        this.ctx.fillStyle = this.defaultColor;
      } else {
        this.ctx.fillStyle = this.activeColor;
        this.ctx.fillRect(this.calclulatePos(i, offset), this.HEIGHT - bottomOffset, offset, -maxHeight * this.array[i]);
        this.ctx.fillStyle = this.defaultColor;
      }
    }
  }
}