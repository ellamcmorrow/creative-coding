'use strict';

let numOfTiles=20;
let tileWidth;
let minRad=10;
let maxRad=50;
let minStroke=1;
let maxStroke=5;
let strokeColor;
let actRandomSeed=1000;
let img;
let mySlider;
function preload(){
 img=loadImage('Triangle.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    rectMode(CENTER);
    mySlider=createSlider(10,100,20);
    mySlider.position(10,10);
    mySlider.addClass("ella");

}

function draw() {
    numOfTiles=mySlider.value();
    randomSeed(actRandomSeed);
    tileWidth=width/numOfTiles;
    translate(tileWidth/2,tileWidth/2);
    background(255);
    for(let gridY=0;gridY<numOfTiles;gridY++){
        for(let gridX=0;gridX<numOfTiles;gridX++){
            let posX=gridX*tileWidth;
            let posY=gridY*tileWidth;
            let angle=atan2((mouseY-posY),(mouseX-posX));
            push();
            translate(posX,posY);
            rotate(angle);
            image(img,20,20,tileWidth,tileWidth);
            pop();


}
  }
}
