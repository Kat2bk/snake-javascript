// core library - game files

// The getContext() method returns an object that provides methods and properties for drawing on the canvas. This reference will cover the properties and methods of the getContext("2d") object, which can be used to draw text, lines, boxes, circles, and more - on the canvas.

// var ctx = canvas.getContext(contextType, contextAttributes);
// "2d", leading to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// we want to get this canvas into rows and columns to have a function for initial state and for the snake to move

const pixel = 30;

const rows = canvas.height / pixel;
const columns = canvas.width / pixel;

var snake;

var imageData = ctx.getImageData(20, 20, 60, 60);

// setter function
//  In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.

(function setup() {
  snake = new Snake();
  snake.draw();
  food = new Food();
  food.randomLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // clearing the trail behind snake
    food.draw();
    snake.update();
    snake.draw();
    if (snake.eat(food)) {
      food.randomLocation();
    }
  }, 250);
})();

// setInterval is setting a timer
// adding event listeners for keypress
// we want to change direction... add the function to the snake Object

window.addEventListener("keydown", e => {
  console.log(e);
  const direction = e.key.replace("Arrow", "");
  console.log(direction);
  snake.changeDirection(direction);
});

// https://alligator.io/js/string-replace/... object rename... looking to see what the key is named to apply it to direction
