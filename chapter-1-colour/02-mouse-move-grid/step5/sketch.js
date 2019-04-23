'use strict';

var colX=10; //declare global variables
var colY=15;

function setup(){
  createCanvas(600,600);
  colorMode(HSB,width,height,100); //scale for color mode
  noStroke();
 //make the fill relationship with the grid by using width and height
}

function draw(){
   colX= mouseX/5+1; // divided by 5 +1 because if its too small it would mean longer display times
   colY=mouseY/5+1; //making a relationship between the mouse positions and the size of each square
   //depensing on where mouse is moved the width and height will be changed
  for(var gridY=0; gridY<height; gridY= gridY+colY ){
    for(var gridX=0; gridX<width; gridX= gridX+colX ){
      fill(gridX,height-gridY,100);
  /*the hue is changing every color by using width
  as the y changes we change the saturation  by using height
  height - gridY s that the strongest colors are at the top, a reverse mechanism*/

  rect(gridX,gridY,colX,colY); //change the start values start where the last rectangle ends
  // colX and colY means the width and height will change as the mouse is moved
}
}
}
