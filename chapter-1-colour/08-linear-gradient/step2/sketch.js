
'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27; //this determines the transparency of the colours

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];
      //determine the x value based on where the last part or fragment was drawn
      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight * 1.5; //increasing row height to give 3d effect

      var index = counter % colorCount;
      var col1 = color(0); //gradient color black
      //alpha value declared at the top f the page
      var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue); //color two will be the color created using hsb array that was created in the previous example
      gradient(x, y, w, h, col1, col2); //creating a gradient between col1 and col2
      //calling the gradient function below
      counter++;
    }
  }
}
// create a gradient
function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  //The createLinearGradient() method creates a linear gradient object.
  // in this case the linear gradient will fill each rectangle
  var grd = ctx.createLinearGradient(x, y, x, y + h); //ctx is an inbuilt javascript function thats needed to create the gradient
//  The addColorStop() method specifies the colors and position in a gradient object.
  grd.addColorStop(0, c1.toString()); //index of the first color stop
  grd.addColorStop(1, c2.toString()); //index of the second color stop
	ctx.fillStyle = grd; //fill using lineargradient
	ctx.fillRect(x, y, w, h); //fill each retangle with the gradient specified
}

function mouseReleased() {
  actRandomSeed = random(100000); //random number
  loop(); //continuously loop when the mouse is release
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
