import { ViewChild, ElementRef } from '@angular/core';

export abstract class Draw {
  time: { start: number; elapsed: number; fps: number; };
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  ctx;
  requestId: number;

  constructor(fps: number) {
    this.time = { start: 0, elapsed: 0, fps: 1000 / fps };
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.time.start = performance.now();
    // this.animate();
  }


  abstract update(): void;

  animate(): void {
    this.time.elapsed += performance.now() - this.time.start;
    this.draw(Math.min(this.time.elapsed / (this.time.fps), 1));
    if (this.time.elapsed >= this.time.fps) {
      this.time.elapsed = 0;
      this.update();
      //update
    }
    this.time.start = performance.now();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  abstract draw(progress: number): void;
}