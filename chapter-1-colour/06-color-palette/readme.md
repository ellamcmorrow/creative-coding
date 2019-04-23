
# tilePatterns
Empty arrays are set up to hold HSB color values.<br/>
A for loop is created to loop through the x tiles and assign random HSB to each tile.<br/>
```  
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}
```
A constrain function limits the mouse x and y values to the canvas width and height.<br/>
A counter value is set up to hold the tile count.
A map function maps the mouse x and y values to from 0 to the width/height to 1, to the tilecount X,Y <br/>
```
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;
```
The tiles are drawn using a nested for loop.<br/>
The x,y position are dependent on where the previous rect was drawn.<br/>
the index variable checks if there is a left over tile. If there is there this tile's color will change.<br/>
An offset color pattern will emerge.<br/>
```
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;
```
The fill is manipulated by the Hue,Saturation,Brightness value  in the array created.<br/>
The counter is incremented adding on new tiles.
In the key pressed function allows us to change the colour palette.<br/>
A forloop is created so that the to loop the the HSB index values. <br/>
The loop is less than a range of 360 because that is the hue value specified earlier.<br/>
```
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
```
A for loop loops through the tile count and increment the color value.
Depending on different key pressed the hue, saturation of brightness values will be random, full value or a specified value.
