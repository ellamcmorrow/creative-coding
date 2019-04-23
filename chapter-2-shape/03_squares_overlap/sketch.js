'use strict';

let numOfTiles=20;
let tileWidth;
let minRad=10;
let maxRad=50;
let minStroke=1;
let maxStroke=5;
let strokeColor;
let actRandomSeed=1000;



function setup() {
  createCanvas(windowWidth, windowHeight);
  tileWidth=width/numOfTiles;
  strokeColor=color(255,0,0,125);

}

function draw() {
    randomSeed(actRandomSeed);
    translate(tileWidth/2,tileWidth/2);
    background(255);
    for(let gridY=0;gridY<numOfTiles;gridY++){
        for(let gridX=0;gridX<numOfTiles;gridX++){


            noFill();
            stroke(strokeColor);

            let posX=gridX*tileWidth;
            let posY=gridY*tileWidth;

            let circleRadius= map(constrain(mouseX,0,width),0,width,minRad,maxRad);
            let strokeThickness= map(constrain(mouseY,0,height),0,height,minStroke,maxStroke);

            strokeWeight(strokeThickness);
            let shiftX=random(-mouseX,mouseX)/20;
            let shiftY=random(-mouseY,mouseY)/20;
            push();
            translate(posX,posY);
        //    rotate(1);
            rect(0+shiftX,0+shiftY,circleRadius,circleRadius);
            pop();




}
  }
}
