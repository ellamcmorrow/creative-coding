  'use strict';

   var numOfRows = 2;
   var numOfCols = 10;
   var mX;
   var mY;

  var colorsLeft = [] //array to hold colors on the left
  var colorsRight = []; //hold colors on right
  var colors = []; // hold all colors

  var interpolateShortest = true;

  function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    stroke(255);
    //noStroke();
  //  shakeColors();
  }

  function draw() {

    numOfRows = 8;
    numOfCols =8;

    mX=mouseX/10;
    mY=mouseY/10;


    var tileWidth = width / numOfRows; //tile width divided by rows specified
    var tileHeight = height / numOfCols;

  //create a grid of squares using a nested for loop
    for (var gridY = 0; gridY < numOfCols; gridY++) { //numOfCols is the variable we've specified earlier
      for (var gridX = 0; gridX < numOfRows; gridX++) {

        var posX = tileWidth * gridX; //where each tile will start
          var posY = tileHeight * gridY; //where each tile will end

          rect(posX, posY, tileWidth, tileHeight);
          fill(mX,mY); // playing with the hue and brightness of the every rectangle depending on the mouse x,y values

      }
    }

  }
