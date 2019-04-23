'use strict';

var numOfLines=10;
var angle;
var radius;
var strokeColor;
var offset;
var velocity= 0.05;

function setup() {
  createCanvas(500, 500);
  background(255);
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
  strokeColor = color(0, 10)
}

function draw() {
  if(mouseIsPressed && mouseButton == LEFT){

  radius= map(mouseX, 0,width,1,150);
  offset= map(mouseX, 0,height,1,150);

  angle = 360/numOfLines;
  stroke(strokeColor);
  translate(width/2,height/2);

  beginShape();
  for (var i=0; i < numOfLines; i++){
  var posX= cos(angle*i+offset)* abs(radius);
  var posY= sin(angle*i+offset)* abs(radius);
  //line(0,0,posX,posY);
  vertex(posX,posY);


  }
  endShape(CLOSE);
  }

  angle+= velocity;
   }
  

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') strokeColor = color(255,99,71,20);
  if (key == '2') strokeColor = color(255, 0, 255, 20);
  if (key == '3') strokeColor = color(255, 70, 0, 20);
  if (key == '4') strokeColor = color(255, 255, 0, 20);

  }

