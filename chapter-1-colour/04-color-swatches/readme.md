# Interpolation <br/>
The direct path to each color has defined gradiations. <br/>
Interpolation helps create groups of colors.<br/>
The tile count of the colours swatches are determined by the mouse position.<br/>
The mouse x and y values is remapped to a number of rows so 2,100 in this case.<br/>
```
numOfRows = int(map(mouseX, 0, width, 2, 100));
numOfCols = int(map(mouseY, 0, height, 2, 10));
```
The tile width and height are then created in accordance with these values.<br/>
An empty colors array is created.<br/>
A shakeColors function is created which loops and creates random color values<br/>
They are held in a colorsRight array and a colorsLeft array.<br/>
The amount variable defines the amount to interpolate each row.i.e how many steps to interpolate it by.<br/>
The intermediary colors are set using an inbuilt lerpColor function.<br/>
This function blends two colors together and finds a color somewhere inbetween.<br/>

```
var startColor = colorsLeft[gridY];
var endColor = colorsRight[gridY];

for (var gridX = 0; gridX < numOfRows; gridX++) {
  var amount = map(gridX, 0, numOfRows - 1, 0, 1); //amount to interpolate between the two values
  //0,1

  if (interpolateShortest) {
    // switch to rgb
    colorMode(RGB);
    interCol = lerpColor(startColor, endColor, amount);
    // switch back
    colorMode(HSB);
  } else {
  interCol = lerpColor(startColor, endColor, amount);//ler pColor Blends two colors to find a third color somewhere between them
    //interpolate from start to end color , by the mapped amount
  }
  fill(interCol);
```
<br/>
The shakeColors function is called when the mouse is released.<br/>
A boolean called interpolateShortest is set up to change color modes.
The keyPressed function is used to trigger this function.<br/>
If 1 is pressed colorMode is HSB and if two is pressed the colorMode is RGB.<br/>
