'use strict';


var segmentCount= 360;//map(mouseY,0,height,1,360);

function setup(){
  createCanvas(600,600);
  colorMode(HSB,360,100,100); //scale for color mode
  //100 is full saturation and boldness
  //360 color steps because were working with a circle
  noStroke();



}

function draw(){

background(0,0,0);
 var angle=0; // declaring a variable we can increment
 var numOfSteps=segmentCount;//full circle will be equal to 360 so the maximum number of segements
 var angleInc=360/numOfSteps;//create a variable to hold how many steps we want to take
 var radius=200;

  beginShape(TRIANGLE_FAN); //triangle fan is an inbuilt function in the p5 library
  vertex(width/2,height/2); //center point
// drawing each angle segment
  for(var angle=0; angle<=360; angle=angle+angleInc){
  //start the angle at 0 increment it to
    //converting polar to cartesian points
    //degrees to radians
    var vx=radius * cos(radians(angle)) +width/2; // width devided by two where it the point needs to be drawn in relation to the canvas
    var vy=radius * sin(radians(angle)) +height/2; //computers draw 0 at three oclock on the circle so this is why it must be divided by two

    fill(angle,360,100,100); // fill the angle by
    vertex(vx,vy); //connect points  at the specified vertexes


  }

endShape();

}
