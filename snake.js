// constructor function...
// https://www.w3schools.com/js/js_object_constructors.asp

// must set an initial value for snake
// creates a rectangle
// https://www.w3schools.com/tags/canvas_fillrect.asp

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = pixel + 1;
  //   sets movement speed by x... using pixel variable
  this.ySpeed = 0;
  //   sets movement by y

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, pixel, pixel);
    // replacing x and y with pixel
  };
  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };
}
