  'use strict';

  var img;
  var colors = [];

  function preload() {
    img = loadImage('data/pic1.jpg'); //load image
  }

  function setup() {
    createCanvas(600, 600);
    noCursor();
    noStroke();
    //loop draw function once
    noLoop();
  }

  function draw() {

  //loads the pixel data for this image into the [pixels] attribute
    img.loadPixels();
  //img pizels [i[ will retrun the val  ue for the color in the array
    console.log(img.pixels[1]);
    console.log(img);

  }
