# Color Palette From Images <br/>
In this example an Rows are created. <br/>
Each row is fragmented into pieces.<br/>
A random seed makes sure the same random number is produced everytime the software is run.<br/>
When the mouse is clicked a random number  is generated and inserted into the function.<br/>
A for loop generates fragments.<br/>
An empty parts array is created. One row equals the whole part.<br/>
A random value is created using the random() function. The random function without parameter is a random number between o and 1.<br/>
Depending on if its between 0.075 and 1 a random number between 2 and 20 will create the fragmented pieces.<br/>
Then the fragments will then be pushed into the parts array.<br/>
The partCount will be increased when the fragments are added on.<br/>
```
var partCount = i + 1;
var parts = [];
for (var ii = 0; ii < partCount; ii++) {
  if (random() < 0.075) {
    var fragments = int(random(2, 20));
    partCount = partCount + fragments;
    for (var iii = 0; iii < fragments; iii++) {
      parts.push(random(2));
    }
  } else {
    parts.push(random(2, 20));
  }
}
```
The fragmented pieces are then mapped to a new part of the row taking.<br/>

```
    var index = counter % colorCount;<br/>
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]); <br/>
      fill(col); // hsb values
      rect(x, y, w, h);
```
A counter is created that is used to keep track of each rectangle. This counter is divided by colour count.<br/>
If there are any left over values an offset will be created.<br/>
The index value in inserted into the hsb array.<br/>
Onclick the parts will be changed. <br/>
