'use strict';

 var numOfRows = 2;
 var numOfCols = 10;

var colorsLeft = [] //array to hold colors on the left
var colorsRight = []; //hold colors on right
var colors = []; // hold all colors

var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  //int:Converts a boolean, string, or float to its integer representation.
  numOfRows = int(map(mouseX, 0, width, 2, 100)); // remapping mouse x a number from one range to another.
//so changing the number of rows/swatches
numOfCols = int(map(mouseY, 0, height, 2, 10));

  var tileWidth = width / numOfRows; //each tile width will be divided by the remapped number
  var tileHeight = height / numOfCols;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < numOfCols; gridY++) { //loop through each square on the y
    var startColor = colorsLeft[gridY]; // the index of grid y will be held in the colors left array for the start color
    var endColor = colorsRight[gridY];

    for (var gridX = 0; gridX < numOfRows; gridX++) {
      var amount = map(gridX, 0, numOfRows - 1, 0, 1); //amount to interpolate between the two values
      //0,1

      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(startColor, endColor, amount);
        // switch back
        colorMode(HSB);
      } else {
      interCol = lerpColor(startColor, endColor, amount);     //lerpColor Blends two colors to find a third color somewhere between them
        //interpolate from start to end color , by the mapped amount
      }
      fill(interCol);

        var posX = tileWidth * gridX; //where each tile will stat
        var posY = tileHeight * gridY; //where each tile will end

        rect(posX, posY, tileWidth, tileHeight);

      colors.push(interCol); // push the lerp color created into the color array
    }
  }
}

function shakeColors() {
  for (var i = 0; i < numOfCols; i++) { // loop through these arrays
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100); //fill the colors left array with a random color
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}
// calls the sake colors function and changes the colours of rectangle when you release mouse
function mouseReleased() {
  shakeColors();
}

function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase'); // save color for potential ase export
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateShortest = true; //changes the color mode to rgb
  if (key == '2') interpolateShortest = false; //changes the color mode to hsb
}
