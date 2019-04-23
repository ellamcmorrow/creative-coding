
'use strict';

var tileCountX = 50;
var tileCountY = 10;
//create empty arrays to hold the values that will be created
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  // each hsb value for the x grid will have a random value
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // white background
  background(0, 0, 100);
  //movement of the tiles
  // limit mouse coordinates to canvas
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  var counter = 0; // the tile counter keeps track of how many tiles there are

  // map mouse x from 0 to width to a range of 1 to the tileCountX variable value
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX)); //the tile count will be changed depending on the mouse pos
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY)); //int ensures it's an integer value

  var tileWidth = width / currentTileCountX; // each tile width is relative to the mouse position
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) { //nested for loop to create each rectangle
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX; // this creates the pattern, the tile left over after the modulus division will be a different color
  // the number of tile held in the counter variable divided  by the current mapped tile X count using mouseX values so that it is
      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]); // fill with the values created in for loop for each x tiles
      rect(posX, posY, tileWidth, tileHeight);
      counter++; //increment the tile count
    }
  }
}
