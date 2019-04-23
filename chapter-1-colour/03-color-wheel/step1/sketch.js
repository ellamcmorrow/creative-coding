  'use strict';


  function setup(){
    createCanvas(600,600);
    colorMode(HSB,360,100,100); //scale for color mode
    //100 is full saturation and boldness
    //360 color steps because were working with a circle
    //noStroke();

  }

  function draw(){
  //create segmented shape
    beginShape(TRIANGLE_FAN); //triangle fan is an inbuilt function in the p5 library
      vertex(57.5, 50);
      vertex(57.5, 15);
      vertex(92, 50);
      vertex(57.5, 85);
      vertex(22, 50);
      vertex(57.5, 15);
      endShape(); //connect the vertexes




    }
