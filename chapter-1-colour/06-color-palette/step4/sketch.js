
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
  // the number of tile held in the counter variable divided  by the current mapped tile X count using mouseX values so that it is constantly changing
      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]); // fill with the values created in for loop for each x tiles
      rect(posX, posY, tileWidth, tileHeight);
      counter++; //increment the tile count
    }
  }
}
//change color palette depending on the key pressed

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = []; //empty array
    for (var i = 0; i < hueValues.length; i++) { // the hue value must be below 360
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i])); //push  the values in to the color array
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase'); //can be put into photoshop and check the code
  }

  if (key == '1') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);  //random hue
      saturationValues[i] = random(100); //random saturation
      brightnessValues[i] = random(100); // random brightness
    }
  }
// full brightness when key 2 is pressed
  if (key == '2') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = 100; // full brightness
    }
  }
//full saturation whne key 3 is pressed
  if (key == '3') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }
//  hue and saturation  values 0 ; i.e none
  if (key == '4') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 0;
      saturationValues[i] = 0;
      brightnessValues[i] = random(100);
    }
  }
// specifying hue value, full saturation, random brightness
  if (key == '5') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }
// specifying hue , full brightness random saturation
  if (key == '6') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == '7') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180);
      saturationValues[i] = random(80, 100); //random between these numbers
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == '8') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180, 360);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == '9') {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) { //using modulus if its an uneven number of tiles
        hueValues[i] = random(360); //random hue
        saturationValues[i] = 100; //full sat
        brightnessValues[i] = random(100); //random brightness
      } else {
        hueValues[i] = 195; //uneven tile count will result in this color hsb manipulation
        saturationValues[i] = random(100);
        brightnessValues[i] = 100;
      }
    }
  }

  if (key == '0') {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = 140;
        saturationValues[i] = random(30, 100);
        brightnessValues[i] = random(40, 100);
      } else {
        hueValues[i] = 210;
        saturationValues[i] = random(40, 100);
        brightnessValues[i] = random(50, 100);
      }
    }
  }

}
