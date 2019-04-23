function setup() {
  createCanvas(500, 500);
  colorMode(HSB, width, height, 100); // the 360 is related to the 720
  //  rectMode(CENTER);
  noStroke();
}

function draw() {
  fill(360, 100, 100);

  var numOfCols = 10; //ten columns
  var numOfRows = 10; //ten rows

  var colX = width / numOfCols; //creating an x grid
  var colY = height / numOfRows;
//forloops draw the rectangles
  for (var gridY = 0; gridY < height; gridY += colY) {
    for (var gridX = 0; gridX < width; gridX += colX) {
      fill(gridX, height - gridY, colX, colY); // the range spans the width of grid X, the saturation of the color is based on each row
      // the brightness is based on the colY value
      rect(gridX, gridY, colX, colY);
      // the rect x,y start when the last rect is draw the width and height are based on the colX, colY values specified earlier
    }
  }
}
