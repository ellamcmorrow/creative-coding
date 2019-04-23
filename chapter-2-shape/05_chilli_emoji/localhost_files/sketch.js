let font;
let numOfTiles = 100;
let pixelDensity = 10;
let circleRadius = 8;
let fontSize = 100;
let radiusSlider;
let checkbox;
let filled;
let textTyped = "Hey";
let input;
var ctx;
let gradImg;
let x2;
let y2;
let col;
let startArray = [];
let finishArray = [];

let x;
let y;
let bugs = [];
let lerpAmount = 0;
let increment = 0.0008;
let animation;
let animate=false;

function preload() {
  myFont = loadFont("./data/AvenirNextLTPro-Demi.otf");
  gradImg = loadImage("./data/g3.png"); // Load the image
}

function setup() {
  frameRate(10);
  gradImg.loadPixels();

  let canvas = createCanvas(700, 500);
  background(0);

  ctx = canvas.drawingContext;
  canvas.parent("cardHolder");

  radiusSlider = createSlider(1, 10, circleRadius);
  radiusSlider.parent("radiusController");
  radiusSlider.mouseReleased(update);

  densitySlider = createSlider(1, 10, pixelDensity);
  densitySlider.parent("densityController");
  densitySlider.mouseReleased(update);

  fontSlider = createSlider(50, 280, fontSize);
  fontSlider.parent("fontController");
  fontSlider.mouseReleased(update);

  animationCheckbox = createCheckbox("animate", false);
  animationCheckbox.parent("animateController");
  animationCheckbox.changed(update);

  checkbox = createCheckbox("FILL", false);
  checkbox.parent("fillController");
  checkbox.changed(update);

  input = createInput();
  input.parent("inputController");
  setUpText();
}

function draw() {
  background(43, 43, 43);
  randomSeed(1);
  // for (let i = 0; i < bugs.length; i++) {
  //     bugs[i].move();
  //     bugs[i].display();
  //   }
  //gradImg = loadImage("data/gradient.png");
  setUpText();
  createArrays();
}

function setUpText() {
  textImg = createGraphics(700, 500);
  // manage pixel density
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(myFont);
  textImg.textSize(fontSize);
  bounds = myFont.textBounds(textTyped, 0, 0, fontSize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
  textImg.text(textTyped, x, y, 50, 50);

  textImg.loadPixels();
}
function createArrays() {
  startArray = [];
  finishArray = [];
  for (let y = 0; y < height; y += pixelDensity) {
    for (let x = 0; x < width; x += pixelDensity) {
      let index = (x + y * textImg.width) * 4;

      let x2 = map(x, 0, width, 0, gradImg.width);
      let y2 = map(y, 0, height, 0, gradImg.height);

      let r = gradImg.pixels[index];
      let g = gradImg.pixels[index + 1];
      let b = gradImg.pixels[index + 2];
      let a = gradImg.pixels[index + 3];

      let col = color(r, g, b, a);
      // console.log(col);

      if (textImg.pixels[index] < 128) {
        startArray.push({
          x: x + random(-200, 200),
          y: y + random(-200, 200),
          fill: col
        });
        //   // Pushing the destination point for each item with the fill colour
        finishArray.push({
          x: x,
          y: y,
          fill: col
        });

        if (filled) {
                        //incrementing the inital lerp value
                        lerpAmount += increment;
                        //once the value goes over one animate circle positions
                        if (lerpAmount > 1) {
                          animate = true;
                        }
                        //don't animate them unless my lerp value is over 1
                        if (lerpAmount < 0) {
                          animate = false;
                        }
                        //for each ellipse in my finish array
                        for (let i = 0; i < finishArray.length; i++) {
                          //get the initial starting points and then move them to a random position by how much depends on the lerp value
                          let x = lerp(startArray[i].x, finishArray[i].x, lerpAmount);
                          let y = lerp(startArray[i].y, finishArray[i].y, lerpAmount);
                          ellipse(x, y, circleRadius);
                        }
        } else {
          noFill();
          stroke(col);
          strokeWeight(1);
          ellipse(x, y, circleRadius, circleRadius);

      }
  }

      }
    }
  }


function update() {
  circleRadius = radiusSlider.value();
  fontSize = fontSlider.value();
  pixelDensity = densitySlider.value();
  setUpText();
  createArrays();
  jitterBug();

  if (checkbox.checked() == 1) {
    filled = 1;
  } else {
    filled = 0;
  }

    if (animationCheckbox.checked() == 1) {
      animation = 1;
    } else {
      animation = 0;
    }

  // text = input.value();
}
function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, textTyped.length - 1);

      setUpText();
    }
  }
}
function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    setUpText();
  }
}
