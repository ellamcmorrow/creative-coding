function setup(){
    createCanvas(720,720);
    colorMode(HSB,360,100,100); // the 360 is related to the 720
    rectMode(CENTER);

}

function draw(){
    background(mouseY/2,38,100); // draw background based on mouse pos Y divided by two
    fill(360-mouseY/2,100,100); // changing the fill using the mouse Y value, based on where users mouse is
    rect(width/2,height/2,mouseX,mouseX);
    //subbing in the x values for rectangles width and height so that the square size varies and you move the mouse
    noStroke();

}
