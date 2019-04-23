function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
  textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
}

function draw() {
  translate(width / 2.0, height / 2.0);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;

  background(192);

  // Draw clock
  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(0, 0, 450, 450);

  // Minute Markers
  fill(0);
  strokeWeight(1);
  for (i = 0; i < 60; i++) { //;ess than 60 seconds
    v = p5.Vector.fromAngle((i +1) / 60.0 * TAU - HALF_PI); //x,y around in a circle
    v.mult(210); //inner circles
    if (i % 5 == 4) {
      ellipse(v.x, v.y, 5, 5); //bigger circle
    } else {
      ellipse(v.x, v.y, 1, 1);
    }
  }

  // Numbers
  textSize(36);
  fill(0);
  noStroke()
  for (i = 0; i < 12; i++) {
    v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI); //so that it doesnt start at 0
    v.mult(180);
    text(i +1 , v.x, v.y);
  }

  // Hour hand
  stroke(0);
  strokeWeight(4);
  t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI; //minus a half pi to start at right point
  v = p5.Vector.fromAngle(t);
  v.mult(127); //how long the hand will be
  line(0, 0, v.x, v.y);

  // Minute hand
  strokeWeight(2);
  t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(205);
  line(0, 0, v.x, v.y);

  // Second hand
  stroke(255, 0, 0);
  strokeWeight(1);
  t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(210);
  line(0, 0, v.x, v.y);

  // Center cap
  fill(0);
  stroke(0);
  noStroke();
  ellipse(0, 0, 20, 20);

  resetMatrix();
}
