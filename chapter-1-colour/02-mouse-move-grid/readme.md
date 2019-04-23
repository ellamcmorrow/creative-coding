# ColorGrid <br/>
The number of squares in the x direction is defined in a variable called numOfRows. <br/>
The number of squares in the y direction is defined in a variable called numOfCols.<br/>
The width of each square is the determined by the colX,colY variables which divide <br/>
the width by the number  of rows and columns you want. <br/>
The grid is created using a nested for loop.<br/>
The loop draws a grid of rectangles. Each x,y value is incremented.<br/>
The hue is determined by grid Y <br/>
The rectangles fill is manipulated by making the saturation value (HSB) equal the height minus grid y.<br/>
As the rectangles near the bottom of the page the color is less saturated.<br/>

```
  for (var gridY = 0; gridY < height; gridY += colY) {
    for (var gridX = 0; gridX < width; gridX += colX) {
      fill(gridX, height - gridY, colX, colY); // the range spans the width of grid X, the saturation of the color is based on each row
      // the brightness is based on the colY value
      rect(gridX, gridY, colX, colY);
    }
  }
```
The column values will vary depending on the position of the mouse
they are divided by a number because if they are too large it will lead to a longer display time
```
   colX= mouseX/5+1;
   colY=mouseY/5+1;
```
