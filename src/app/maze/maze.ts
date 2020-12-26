import { Component } from '@angular/core';
import { Draw } from '../draw';
import { recursionDivision } from "./generators/recursionDivision";
import { AldousBroder } from "./generators/AldousBroder";
import { binaryTree } from "./generators/binaryTree";
import { randomizedDepthFirstSearch } from "./generators/randomizedDepthFirstSearch";

@Component({
  selector: 'maze-generator',
  templateUrl: './maze.html',
  styleUrls: ['maze.css'],
})

export class Maze extends Draw {
  WIDTH: number;
  defaultColor: string;
  activeColor: string;
  backgroundColor: string;
  steps: Array<[[number, number], [number, number], boolean]>;
  ind: number;
  generationFunctions: ((N: number) => [[number, number], [number, number], boolean][])[];
  currentFunc: { (arg0: number): [[number, number], [number, number], boolean][]; (N: number): [[number, number], [number, number], boolean][]; };
  N: number;

  constructor() {
    super(7);
    this.WIDTH = 500;
    this.defaultColor = "blue";
    this.activeColor = "red";
    this.backgroundColor = "white";
    this.N = 25;
    this.ind = 0;
    this.generationFunctions = [recursionDivision, AldousBroder, binaryTree, randomizedDepthFirstSearch];
    this.currentFunc = this.generationFunctions[0];
  }

  changeN() {
    this.N = Math.max(this.N, 5);
  }

  ngOnInit() {
    super.ngOnInit();
    this.ctx.canvas.width = this.WIDTH;
    this.ctx.canvas.height = this.WIDTH;
    this.steps = this.currentFunc(this.N);
    // this.animate();
  }

  beginGeneration() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.WIDTH, this.WIDTH);
    this.steps = this.currentFunc(this.N);
    this.ind = 0;
    this.animate();
  }
  do() {
    console.log(3);
  }

  update() {
    if (this.ind < this.steps.length - 1)
      this.ind++;
  }

  drawCircle(x: number, y: number, radius: number) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  drawLine(x1: number, y1: number, x2: number, y2: number) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  draw(progress: number) {
    this.ctx.fillStyle = this.backgroundColor;
    // this.ctx.fillRect(0, 0, this.WIDTH, this.WIDTH);
    this.ctx.fillStyle = (this.steps[this.ind][2]) ? this.defaultColor : this.activeColor;
    let tunnel_width = this.WIDTH / (this.N * 2 + 1);
    let offset = this.WIDTH / (this.N + 1);
    let item = this.steps[this.ind][1];
    let i = this.steps[this.ind][0][0];
    let j = this.steps[this.ind][0][1];
    let sign1 = (i > item[0]) ? 1 : -1;
    let sign2 = (j > item[1]) ? 1 : -1;
    if (item[0] != i) {
      this.ctx.fillRect(offset * (i + 1) + sign1 * tunnel_width / 2, offset * (j + 1) + sign2 * tunnel_width / 2, (offset * (item[0] - i) - sign1 * tunnel_width) * progress, tunnel_width);
    }
    else {
      this.ctx.fillRect(offset * (i + 1) + sign1 * tunnel_width / 2, offset * (j + 1) + sign2 * tunnel_width / 2, tunnel_width, (offset * (item[1] - j) - sign2 * tunnel_width) * progress);
    }
  }
}