'use strict';

var colorCount = 30; //number of colors
var hueValues = [];  //empty arrays to hold the color values
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0; //initialize act random seed value

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  randomSeed(actRandomSeed);
  //random seed makes sure the same random number is produced everytime the oftware is run
  // when the mouse is clicked a random number  is genereated and inserted into the function

  for (var i = 0; i < colorCount; i++) { //increment the index
    if (i % 2 == 0) { // if the increment is an even number
      hueValues[i] = random(300, 340); // take a random val between 200 and 220 and insert it into the hue value array
      saturationValues[i] = 100; //full saturation
      brightnessValues[i] = random(80, 100);
    } else {
      hueValues[i] = 195; //if the increment value is uneven make these the hsb values
      saturationValues[i] = random(50, 100);
      brightnessValues[i] = 0;
    }
  }

  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));// make a random row count between 5 and 20!
  var rowHeight = height / rowCount;// divide the height of the canvas by the number of rows made

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) { //loop through the rows
    // how many fragments
    var partCount = i + 1; //increment the number of parts
    var parts = []; //empty parts array
//how many pieces will be drawn
    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) { //random without a value means it will be a random value between 0 and 1
     //if the number is greater than 0.075
    //create random fragment pieces between 2 and 20
        var fragments = int(random(2, 20));
        partCount = partCount + fragments; // increasing the number of parts per row
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2)); // pushing a fragment number into the parts array
        }
      } else {
        parts.push(random(2, 20)); //otherwise push a number between 2 and twenty into the parts array
      }
    }

    // add all the parts and fragments in the parts array together to get the total
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii]; //adding all the parts and fragment pieve that have been made together
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];
      //draw the rectangles that have been specified in the parts array

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;

      var index = counter % colorCount; // if there are left over values in after the colour count
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]); //hsb values will be created using modulus value
      fill(col); // hsb values
      rect(x, y, w, h);

      counter++; //increment counter value
    }
  }
}

function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}
