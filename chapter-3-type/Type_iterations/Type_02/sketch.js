let textTyped = "Type";
let font;
let fontSize = 300;
let textImg;
let gradImg;
let pixelDensity = 10;
let range = 100;
let finishingPoints = [];
let startingPoints = [];
let counter = 0;
let sinSlider;
let densitySlider;
let widthSlider;
let direction = true;
let increment = 100;
let angle = 0;
let filled = 1;
let animate = false;
let circleRadius = 8;
let checkbox;
let animationBox;
let myWidth = $("#canvasHolder").width();

function preload() {
  font = loadFont("data/Roboto-Bold.ttf");
  gradImg = loadImage("data/grad.png");
}

function setup() {
  let canvas = createCanvas(myWidth, myWidth);
  canvas.parent("canvasHolder");

  setUpText();
  gradImg.loadPixels();
  createArrays();
  frameRate(frameRateVal);

  densitySlider = createSlider(1, 20, 5);
  densitySlider.class("densitySlider");
  densitySlider.mouseReleased(update);
  densitySlider.parent("densityController");

  fontSizeSlider = createSlider(100, 700, 200);
  fontSizeSlider.class("fontSizeSlider");
  fontSizeSlider.mouseReleased(update);
  fontSizeSlider.parent("fontSizeController");

  rangeSlider = createSlider(0, 200, 100);
  rangeSlider.class("rangeSlider");
  rangeSlider.mouseReleased(update);
  rangeSlider.parent("rangeController");

  inputBox = createInput("TYPE");
  inputBox.class("inputBox");
  inputBox.input(update);
  inputBox.parent("inputBoxController");

  checkBox = createCheckbox("FILL", true);
  checkBox.class("checkBox");
  checkBox.changed(update);
  checkBox.parent("checkBoxController");

  animationBox = createCheckbox("TEXT ANIMATION", false);
  animationBox.class("animationBox");
  animationBox.changed(update);
  animationBox.parent("animateBoxController");
}

function draw() {
  background(255, 20);
  noFill();
  noStroke();
  for (let i = 0; i < finishingPoints.length; i++) {
    if (filled == 1) {
      noStroke();
      fill(finishingPoints[i].fill);
    } else {
      noFill();
      stroke(finishingPoints[i].fill);
    }

    let lerpAmount = (counter / finishingPoints.length) * increment;
    //console.log(lerpAmount)
    if (lerpAmount > 1) {
      lerpAmount = 1;
    }
    let x = lerp(finishingPoints[i].x, startingPoints[i].x, lerpAmount);
    let y = lerp(finishingPoints[i].y, startingPoints[i].y, lerpAmount);
    ellipse(x, y, circleRadius);

  }
  //counter value starts off as true , if animation is checked
  if ((direction === true) & (animate == true)) {
    //send the points to the finishing position i.e the text
    if (counter * increment < finishingPoints.length) {
      counter--; //increment the val
      background(255, 50);
      //reverse(setUpText);
      //console.log('reversing')
    }
  }
}
function setUpText() {
  // create an offscreen graphics object to draw the text into
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER);
  textImg.text(textTyped, width / 2, fontSize);
  textImg.loadPixels();
}

function createArrays() {
  for (let x = 0; x < textImg.width; x += pixelDensity) {
    for (let y = 0; y < textImg.height; y += pixelDensity) {
      // Calculate the index for the pixels array from x and y
      let index = (x + y * textImg.width) * 4;

      // Get the red value from image
      let r = textImg.pixels[index];

      if (r < 128) {
        let r = gradImg.pixels[index];
        let g = gradImg.pixels[index + 1];
        let b = gradImg.pixels[index + 2];
        let col = color(r, g, b);
        //push my x y values into a destination point array --> finish points as text
        finishingPoints.push({
          x: x,
          y: y,
          fill: col
        });
        //start x y values will be random within the given range,rgb value hold the grad Img pixels
        startingPoints.push({
          x: x + random(-range, range),
          y: y + random(-range, range),
          fill: col
        });
      }
    }
  }
}
function update() {
      finishingPoints = [];
      startingPoints = [];
      setUpText();
      createArrays();
      pixelDensity = densitySlider.value();
      fontSize = fontSizeSlider.value();
      range = rangeSlider.value();
      textTyped = inputBox.value();

      if (checkBox.checked() == true) {
        filled = true;
      } else {
        filled = false;
      }
      if (animationBox.checked() == true) {
        animate = true;
      } else {
        animate = false;
      }
      counter = 0;
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), "png");
}
