// Calling the dependencies

const sharp = require('sharp');
const compress_images = require('compress-images');

// Resizing image

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize(path, outputPath, width){

  sharp(path).resize({width: width}).toFile(outputPath, (err)=>{
    if (err){
      console.log(err);
    }else{
      console.log('image successfully resized, initializing the compress');
      compress(outputPath, './compressed/');
    }
  });

};

function compress(pathInput, outputPath){

  compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
    console.log('image successfully compressed');

});

}

resize(path, './resized/output_resize.jpg', width); 