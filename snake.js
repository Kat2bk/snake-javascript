// constructor function...
// https://www.w3schools.com/js/js_object_constructors.asp

// must set an initial value for snake
// https://www.w3schools.com/tags/canvas_fillrect.asp

function Snake() {
  this.x = 0;
  this.y = 0;

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, pixel, pixel);
  };
}
