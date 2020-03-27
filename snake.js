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

  this.changeDirection = function(direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -pixel + 1;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = pixel + 1;
      case "Left":
        this.xSpeed = -pixel + 1;
        this.ySpeed = 0;
      case "Right":
        this.xSpeed = pixel + 1;
        this.ySpeed = 0;
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  };
}
