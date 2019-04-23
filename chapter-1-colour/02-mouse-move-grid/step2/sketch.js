function setup() {
  createCanvas(500, 500);
  colorMode(HSB, width, height, 100); // the 360 is related to the 720
  //  rectMode(CENTER);
  noStroke();
}

function draw() {
  fill(360, 100, 100);

  var numOfCols = 10; //ten columns
  var numOfRows = 20; //ten rows

  //var colX = width / numOfCols;
  var colY = height / numOfRows; // the height divided by the number of rows you want specified earlier
  //nested forloop
  for (var gridY = 0; gridY < height; gridY += colY) {
//    for (var gridX = 0; gridX < width; gridX += colX) {
      fill(20, height - gridY, 100, colY); // the hue is changed as the ractangles progress down the page
      rect(0, gridY, width, colY);
    }
  }
//}
