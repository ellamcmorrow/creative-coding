'use strict';

var numOfLines=10;
var angle;
var radius;
var myStroke;



function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

}

function draw() {

  background(255);
  radius= mouseX-width/2;
  numOfLines= int(map(mouseY,0,height,2,80));
  myStroke= int(map(mouseY,0,height,8,1));
  angle = 360/numOfLines;
  strokeWeight(myStroke);
  //radius= map(mouseX, 0,width,1,150);
  translate(width/2,height/2);
  for (var i=0; i < numOfLines; i++){
  var posX= cos(angle*i)* abs(radius);
  var posY= sin(angle*i)* abs(radius);
  line(0,0,posX,posY);

}

    }
  




