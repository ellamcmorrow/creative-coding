# SquareResizing <br/>
Color mode HSB is specified, Hue , Saturation, Brightness.<br/>
There can be four values entered here, if you include alpha.<br/>
The range of hue is specified at 360, Saturation 100, and Brightness 100. <br/>
RectMode center is used to move the square to be drawn at the center of the canvas.<br/>
The size of each square is controlled by the x position of the mouse.<br/>
As the mouse moves to the right the size of the inner square increases. <br/>
Both the background color and the fill are created using the mouseY values <br/>
As the Y value changes so does the color values the squares are filled with.<br/>

```
background(mouseY/2,38,100);
fill(360-mouseY/2,100,100);
rect(width/2,height/2,mouseX,mouseX);
noStroke();
```
The keypressed method uses the gd function, which uses the generative design library. <br/>
The timestamp, mouse x and y positions will also be saved  in the name of the image when the s key is pressed.<br/>

```
function keyPressed(){
    if(key=='s' || key=='S' ) saveCanvas(gd.timestamp() + '_MouseX_' + mouseX  + '_MouseY_' + mouseY ,'png');
}
```
