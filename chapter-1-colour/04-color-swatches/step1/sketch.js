  'use strict';

   var numOfRows = 2;
   var numOfCols = 10;

  var colorsLeft = [] //array to hold colors on the left
  var colorsRight = []; //hold colors on right
  var colors = []; // hold all colors
  var col;
  var interpolateShortest = true;

  function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    noStroke();
  
  col=color(random(0, 60), random(0, 100), 100);

  }

  function draw() {

    numOfRows = 8;
    numOfCols =8;

    var tileWidth = width / numOfRows; //tile width divided by rows specified
    var tileHeight = height / numOfCols;
    var interCol;
    colors = []; //create an empty colors array
  //create a grid of squares using a nested for loop
    for (var gridY = 0; gridY < numOfCols; gridY++) { //numOfCols is the variable we've specified earlier
          var posY = tileHeight * gridY; //where each tile will start
          rect(100, posY, 100, tileHeight);
          fill(col); //fill with random color on refresh
    }
  }
