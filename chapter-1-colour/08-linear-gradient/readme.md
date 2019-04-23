#Linear gradient
This example creates a linear gradient within each square. <br/>
The gradient function specifies where the colorStop should start and stop within each square.<br/>

```var h = rowHeight * 1.5; ```

The height is multiplied by 1.5 is order to created an overlay effect.<br/>
The gradient function creates linear gradients within each rectangle.<br/>
The grd variable hold the linear gradient. Within the object two points x,y specify where the position where each color will be start.<br/>
The h value is the height of the rectangle.<br/>
Two colors are specified in the object using an array.<br/>

```
function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  //The createLinearGradient() method creates a linear gradient object.
  // in this case the linear gradient will fill each rectangle
  var grd = ctx.createLinearGradient(x, y, x, y + h); //ctx is an inbuilt javascript function thats needed to create the gradient
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}
```
