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
  	//Define the number of tiles
  	var tileCount=2;
  	//the width of each tile
  	var rectSize=width/tileCount;
  	//loads the pixel data for this image into the [pixels] attribute
  	img.loadPixels();
  	//Empty colors array each time the draw function is called
  	colors=[];

  	for(var gridY=0;gridY<tileCount;gridY++){
  		//for each gridX value we need to work out a color to be stored
  		for(var gridX=0;gridX<tileCount;gridX++){
  	//work out the x and y pixel value
  	var py=int(gridY*rectSize);
  	var px=int(gridX*rectSize);
  	//comvert this t the appropriate index value in the pixels array
  	var i=(py*img.width+px)* 4; //[r,g,b,a] [h,s,b,a]

  	var c =color(img.pixels[i], img.pixels[i+1],img.pixels[i+2],img.pixels[i+3]);

  	colors.push(c);


  	}
  	console.log(colors);
  }

  //create color object
  //img pizels [i[ will retrun the value for the color in the array
  // console.log(img.pixels[1]);
  // console.log(img);

  }
