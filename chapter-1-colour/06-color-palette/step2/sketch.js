/**
 * generates specific color palettes
 *
 * MOUSE
 * position x/y        : row and coloum count
 *
 * KEYS
 * 0-9                 : creates specific color palettes
 * s                   : save png
 * c                   : save color palette
 */
'use strict';

var tileCountX = 50;
var tileCountY = 10;
//create empty arrays to hold the values that will be created
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var mX;
var mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  changeColor();


}

function draw() {
  // white backgrounf
  background(0, 0, 100);

  // limit mouse coordinates to canvas
   mX = constrain(mouseX, 0, width);
   mY = constrain(mouseY, 0, height);


  // map mouse x from 0 to width to a range of 1 to the tileCountX variable value
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY)); //int ensures it's an integer value

  var tileWidth = width / currentTileCountX; // each tiles width is related to the mouse poisition x
  var tileHeight = height / currentTileCountY; // each tiles width is related to the mouse poisition y

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
    //  var index = counter % currentTileCountX; // this creates the pattern, the tile left over after the modulus division will be a different color

      // get  color values from the change color function
      fill(hueValues,saturationValues,brightnessValues);
      rect(posX, posY, tileWidth, tileHeight);
    }
  }
}
function changeColor(){
  // each hsb value for the x grid will have a random value
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}
