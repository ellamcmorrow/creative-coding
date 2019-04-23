    # Color Palette From Images <br/>
    The image is loaded into the canvas using the preload function. <br/>
    noLoop is defined in the setup so that the draw function is only drawn once.<br/>
    The pixel data is loaded using the loadPixels function.<br/>
    An empty colors array is set up to hold the colors.<br/>

    For each gridX value we need to work out a color to be stored.<br/>
    Px and py variable hold the pixel value of each color.<br/>

    Variable i converts the appropriate index value in the pixel array in (RGBA or HSBA) form.<br/>
    Variable c increments the index of each pixel so that the i values can be placed in.<br/>
    It is then pushed into the color array.<br/>

  	```
      for(var gridY=0;gridY<tileCount;gridY++){
    		for(var gridX=0;gridX<tileCount;gridX++){
      	var py=int(gridY*rectSize);
      	var px=int(gridX*rectSize);

      	var i=(py*img.width+px)* 4;
      	var c =color(img.pixels[i], img.pixels[i+1],img.pixels[i+2],img.pixels[i+3]);

    	colors.push(c);

    ```
  The generative design library is used to sort the colors.<br/>

  ```
  gd.sortColors(colors, sortMode);

  ```
  It is also used in the key released function. So that the swatches can be saved.<br/>
  Different pictures are loaded in when 1,2,3 or 4 are pressed. <br/>
  Hue saturation and brightness can be manipulated depending on what key is pressed and it uses the generative design library as well. <br/>
