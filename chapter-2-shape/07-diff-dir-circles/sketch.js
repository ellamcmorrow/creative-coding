"use strict";

let noOfTiles = 10;
let tileWidth;
let circleRadiusBig = 40;
let circleRadiusSmall = 20;
// Declare the ransom seed
let actRandomSeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tileWidth = width / noOfTiles;
}

function draw() {
  background(255,182,193);
  noStroke();
  randomSeed(actRandomSeed); // Set random seed instead of noLoop()

  translate(tileWidth / 2, tileWidth / 2);

  for (let gridY = 0; gridY < noOfTiles; gridY++) {
    for (let gridX = 0; gridX < noOfTiles; gridX++) {
      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;

      // Add shift position for the big circles
      let shiftX = (random(-1, 1) * mouseX) / 20;
      let shiftY = (random(-1, 1) * mouseY) / 20;

      fill(0);
      // Add the sift to the x and y position
      ellipse(posX + shiftX, posY + shiftY, circleRadiusBig, circleRadiusBig);
    }
  }

  for (let gridY = 0; gridY < noOfTiles; gridY++) {
    for (let gridX = 0; gridX < noOfTiles; gridX++) {
      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;

      fill(255);
      ellipse(posX, posY, circleRadiusSmall, circleRadiusSmall);
    }
  }
}

// Change circles position in the grid
function mousePressed() {
  actRandomSeed = random(100000);
}

// Save canvas
function keyPressed() {
  if (key == "s" || key == "S")
    saveCanvas(
      gd.timestamp(),
      "_mouseX_" + mouseX + "_mouseY_" + mouseY + ".png"
    );
}
