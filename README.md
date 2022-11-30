# how it was done?
 First of all, the dependencies are being called:

The [sharp](https://sharp.pixelplumbing.com/install) package it helps in the resizing images part;

The [compress](https://www.npmjs.com/package/compress-images) package compress automatically the image, 
however in the code, the compress function the compression code will fetch the resized image.

---

### Resize

In the sharp (resize) function we need put as a parameter three things:
 - path ~ Received file location
 - outputPath ~ Where will the resized file go
 - width ~ Width received by the user

When the sharp function are performed, the else conditional will call the [compress](https://www.npmjs.com/package/compress-images) function, like a 
callback. 

### Compress

Parameter to the compress_images function:
 - pathInput ~ File that will be resized from the previous function
 - outputPath ~ Where will the compress file go
 
 In the compress function execution we put the outputPath of the [resize](https://sharp.pixelplumbing.com/install) function and the 
 location where the file will be saved.


### Run 

node app 'image file' 'px'


