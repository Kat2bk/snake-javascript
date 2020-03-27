// // web interface... the javascript that runs in the browser

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // changing state... state changes by the move function and key events
// var state = initialState();
// // we will get this from snake.js file

// // The draw() function is used to executes the code inside the block until the program is stopped or noLoop() is called. If the program does not contain noLoop() function within setup() function then draw() function will still be executed once before stopping it. it is p5 javascript. --codingTrain talks a lot of p5.

// // requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

// // looping: t1 and t2 is like a timestamp

// const move = t1 => t2 => {
//   if (t2 - t1 > 100) {
//     //   if greater than 100 milliseconds
//     state = next(state);
//     // old state, passing new state
//     draw();
//     window.requestAnimationFrame(move(t2));
//   } else {
//     window.requestAnimationFrame(move(t1));
//     // if 100 milliseconds hasn't passed, we don't redraw...
//   }
// };

// // main function...

// draw();
// window.requestAnimationFrame(move(0));
// invoking function step... in the window
