class Foo {
  array: number[];
  time;
  ctx;
  canvas;
  currentSwap;
  requestId;

  constructor() {
  	this.array = [1, 5, 3, 12, 4, 2, 1];
    this.time = { start: 0, elapsed: 0, fps: 1000 };
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.time.start = performance.now();
  	this.currentSwap = [0, 1];
    this.animate();
  }

  animate() {
    this.time.elapsed += performance.now() - this.time.start;
    if (this.time.elapsed >= this.time.fps){
      this.time.elapsed = 0;
      let temp = this.array[this.currentSwap[0]];
      this.array[this.currentSwap[0]] = this.array[this.currentSwap[1]];
      this.array[this.currentSwap[1]] = temp;
      this.currentSwap = [-1, -2];
      //update
    }
    this.draw( this.time.elapsed / this.time.fps);
    this.time.start = performance.now();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  offset(){
    return this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
  }

  calclulatePos(i){
    return this.offset()/2 * (i + 1) + i * this.offset();
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
      let pois
      if (i != this.currentSwap[0] && i != this.currentSwap[1]){
        this.ctx.fillRect(this.calclulatePos(i), this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
      }
      else{
        this.ctx.fillStyle = "red";
        let another = (i ==  this.currentSwap[0]) ? this.currentSwap[1] : this.currentSwap[0];
        let pos = this.calclulatePos(i) + (this.calclulatePos(another) - this.calclulatePos(i)) * progress;
        this.ctx.fillRect(pos, this.ctx.canvas.height - bottomOffset * 2, offset, -maxHeight * this.array[i]);
        this.ctx.fillStyle = "cyan";
      }
    }
  }
}
let foo = new Foo();