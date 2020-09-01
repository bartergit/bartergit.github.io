function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.bubbleSort = function (originalArray) {
        var array = originalArray.slice();
        ;
        var steps = [];
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - i - 1; j++) {
                var cond = array[j + 1] < array[j];
                if (cond) {
                    swap(array, j, j + 1);
                    steps.push([j, j + 1, false]);
                }
                steps.push([j, j + 1, cond]);
            }
        }
        return steps;
    };
    return Sorter;
}());
var Foo = /** @class */ (function () {
    function Foo() {
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
    Foo.prototype.beginSort = function (type) {
        this.steps = Sorter.bubbleSort(this.array);
        this.ind = 0;
    };
    Foo.prototype.update = function () {
        if (this.ind <= this.steps.length - 1) {
            if (this.steps[this.ind][2])
                swap(this.array, this.steps[this.ind][0], this.steps[this.ind][1]);
            this.ind++;
        }
        else {
            this.ind = 0;
            this.steps = [];
        }
    };
    Foo.prototype.animate = function () {
        this.time.elapsed += performance.now() - this.time.start;
        if (this.time.elapsed >= this.time.fps) {
            this.time.elapsed = 0;
            this.update();
            //update
        }
        this.draw(this.time.elapsed / this.time.fps);
        this.time.start = performance.now();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    };
    Foo.prototype.offset = function () {
        return this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
    };
    Foo.prototype.calclulatePos = function (i) {
        return this.offset() / 2 * (i + 1) + i * this.offset();
    };
    Foo.prototype.shuffle = function () {
        for (var i = 0; i < 30; i++) {
            swap(this.array, getRandomInt(0, this.array.length), getRandomInt(0, this.array.length));
        }
    };
    Foo.prototype.draw = function (progress) {
        var canvas = document.getElementById("canvas");
        this.ctx.canvas.width = 500;
        this.ctx.canvas.height = 5 * 50;
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "cyan";
        var bottomOffset = 10;
        var offset = this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
        var maxHeight = (this.ctx.canvas.height - bottomOffset * 2) / Math.max.apply(null, this.array);
        for (var i = 0; i < this.array.length; i++) {
            if (this.ind > this.steps.length - 1 || i != this.steps[this.ind][0] && i != this.steps[this.ind][1]) {
                this.ctx.fillRect(this.calclulatePos(i), this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
            }
            else if (this.steps[this.ind][2]) {
                this.ctx.fillStyle = "red";
                var another = (i == this.steps[this.ind][0]) ? this.steps[this.ind][1] : this.steps[this.ind][0];
                var pos = this.calclulatePos(i) + (this.calclulatePos(another) - this.calclulatePos(i)) * progress;
                this.ctx.fillRect(pos, this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
                this.ctx.fillStyle = "cyan";
            }
            else {
                this.ctx.fillStyle = "yellow";
                this.ctx.fillRect(this.calclulatePos(i), this.ctx.canvas.height - bottomOffset, offset, -maxHeight * this.array[i]);
                this.ctx.fillStyle = "cyan";
            }
        }
    };
    return Foo;
}());
var foo = new Foo();
