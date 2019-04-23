'use strict';

let numOfTiles=20;
let tileWidth;


function setup() {
  createCanvas(500, 500);
  background(0);
  tileWidth=width/numOfTiles;
  angleMode(DEGREES);


}

function draw() {
    randomSeed(0);
    background(0);
    strokeCap(actStrokeCap);
    randomSeed(actRandomSeed);
  for (let gridX=0; gridX < numOfTiles; gridX++){
  for (let gridY=0; gridY < numOfTiles; gridY++){

    fill(0);
    stroke(255,153,204);
    strokeWeight(10);
    rectMode(CENTER);
    push();
    translate(gridX*tileWidth+tileWidth/2,gridY*tileWidth+tileWidth/2);
    //rotate(30);
// scale(1/3);
    strokeCap(PROJECT);
    let choice=Math.floor(random(2));
    if(choice==0){
    line(-tileWidth/2,tileWidth/2,tileWidth/2,-tileWidth/2);
}
    else{
    line(-tileWidth/2,-tileWidth/2,tileWidth/2,tileWidth/2);
}
    pop();

}
  }
  }
