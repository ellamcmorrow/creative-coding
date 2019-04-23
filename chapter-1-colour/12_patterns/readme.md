#Radial gradient
This example creates a radial gradient within each square. <br/>
The centerGradient function specifies creates the gradient within each square. <br/>
When the cnetre gradient is called the it must be created using a maximum width and height of the rectangle. <br/>
```
centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
```
The height is multiplied by 1.5 is order to created an overlay effect. <br/>
cx and cy specify where the gradient will be strongest within each rectangle. <br/>
These are the centre points of the rectangle. <br/>
radius 1 and 2 specify how far across each rectangle the radial gradient will span. <br/>
```
function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2;
  var cy = y1 + (y2 - y1) / 2;
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}
```
