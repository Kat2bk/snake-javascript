function Food() {
  this.x;
  this.y;

  this.randomLocation = function() {
    // rounds it downward, returns an integer, Math.random returns a decimal
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * pixel;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * pixel;
  };

  this.draw = function() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, pixel, pixel);
  };
}
