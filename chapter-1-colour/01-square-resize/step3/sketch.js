function setup(){
    createCanvas(720,720);
    colorMode(HSB,360,100,100); // the 360 is related to the 720
    rectMode(CENTER);

}

function draw(){
    background(mouseY/2,38,100);
    fill(360-mouseY/2,100,100);
    rect(width/2,height/2,mouseX,mouseX);
    noStroke();

}
// using the gd library (generative design to save a picture of the canvas when the s key is saved)
// the timestamp, mouse x and y positions will also be saved  in the name of the image
function keyPressed(){
    if(key=='s' || key=='S' ) saveCanvas(gd.timestamp() + '_MouseX_' + mouseX  + '_MouseY_' + mouseY ,'png'); //gd stands for the generative design library

}
