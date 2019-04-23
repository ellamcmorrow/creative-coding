# ColorWheel <br/>
The color wheel segments are arranged in the shape of a fan. <br/>
Each segment has a different color.<br/>
The number of segments wanted is specified in a segmentCount variable.<br/>
360 is divided by the segmentCount, because there are 360 degrees in a circle.<br/>
A variable angle is defined so that it can hold the incrementation value.<br/>
The number of steps is equal the the segmentCount (how many segments we want).<br/>
The angle will be incremented by 360 divided by the numOf steps, 360 is equal to the full or whole segment.<br/>
(360 degrees in a circle).<br/>
A radius is defined.<br/>

```
var angle=0;
var numOfSteps=segmentCount;//full circle will be equal to 360
var angleInc=360/numOfSteps;//create a variable to hold how many steps we want to take
var radius=200;
```

The triangle fan function is used to create the shape.<br/>
BeginShape and endShape are inbuilt functions in p5 and need to be used with the TRIANGLE_FAN function.<br/>
A vertex specified the centre point of the fan.<br/>
A for loop is set up to draw each segment.<br/>
Each segment drawn is incremented and relative to the segmentCount.<br/>
It converts vertex points from polar to cartesian.<br/>
Width and height divided by two where it the point needs to be drawn in relation to the canvas.<br/>
The vetex will be joined at the vx,vy.<br/>

```
beginShape(TRIANGLE_FAN);
  vertex(width/2,height/2); //center point
  for(var angle=0; angle<=360; angle=angle+angleInc){
    var vx=radius * cos(radians(angle)) +width/2;
    var vy=radius * sin(radians(angle)) +height/2;

    fill(angle,360,100,100);
    vertex(vx,vy);
  }

endShape();
}
```
