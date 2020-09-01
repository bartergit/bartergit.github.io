function swap(array, i: number, j: number){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

class Sorter{
  static bubbleSort(originalArray: number[]): Array<[number, number, boolean]>{
    let array = originalArray.slice();;
    let steps = [];
    for (let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i - 1; j++){
        let cond = array[j + 1] < array[j];
        if (cond){
          swap(array, j, j + 1);
          steps.push([j, j + 1, false]);
        }
        steps.push([j, j + 1, cond]);
      }
    }
    return steps;
  }
}



class Foo {
  array: number[];
  steps: Array<[number, number, boolean]>;
  time;
  ctx;
  canvas;
  currentSwap;
  requestId;
  ind: number;

  constructor() {
  	this.array = [1, 2, 3, 4, 5, 6, 7];
    this.steps = [];
    this.ind = 0;
    this.time = { start: 0, elapsed: 0, fps: 200 };
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.shuffle();
    this.time.start = performance.now(); 
    this.animate();
  }


  beginSort(type: string){ //type
    this.steps = Sorter.bubbleSort(this.array);
    this.ind = 0;
  }

  update(){
    if (this.ind <= this.steps.length - 1){
        if (this.steps[this.ind][2])
          swap(this.array, this.steps[this.ind][0], this.steps[this.ind][1]);
        this.ind++;
    } else {
      this.ind = 0;
      this.steps = [];
    }
  }

  animate() {
    this.time.elapsed += performance.now() - this.time.start;
    if (this.time.elapsed >= this.time.fps){
      this.time.elapsed = 0;
      this.update();
      //update
    }
    this.draw( this.time.elapsed / this.time.fps);
    this.time.start = performance.now();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  offset(){
    return this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
  }

  calclulatePos(i: number){
    return this.offset()/2 * (i + 1) + i * this.offset();
  }

  shuffle(){
    for (let i = 0; i < 30; i++){
      swap(this.array, getRandomInt(0, this.array.length), getRandomInt(0, this.array.length));
    }
  }

  draw(progress) {
  	let canvas = document.getElementById("canvas");
    this.ctx.canvas.width = 500;
    this.ctx.canvas.height = 5 * 50;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "cyan";
    let bottomOffset = 10;
    let offset = this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
    let maxHeight = (this.ctx.canvas.height - bottomOffset * 2) / Math.max.apply(null, this.array);

    for (let i = 0; i < this.array.length; i++){
      if (this.ind > this.steps.length - 1 || i != this.steps[this.ind][0] && i != this.steps[this.ind][1]){
        this.ctx.fillRect(this.calclulatePos(i), this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
      }
      else if(this.steps[this.ind][2]){
        this.ctx.fillStyle = "red";
        let another = (i ==  this.steps[this.ind][0]) ? this.steps[this.ind][1] : this.steps[this.ind][0];
        let pos = this.calclulatePos(i) + (this.calclulatePos(another) - this.calclulatePos(i)) * progress;
        this.ctx.fillRect(pos, this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
        this.ctx.fillStyle = "cyan";
      } else {
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(this.calclulatePos(i), this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
        this.ctx.fillStyle = "cyan";
      }
    }
  }
}

let foo = new Foo();