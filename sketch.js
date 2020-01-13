// function setup() {
//   createCanvas(800, 800);
// }
//
// function draw() {
//   if(mouseIsPressed == true) {
//     if(mouseButton == LEFT){
//       fill(255);
//       ellipse(200,200,200);
//     }
//     if(mouseButton == RIGHT){
//       fill(255);
//       rect(100,100,200,200);
//     }
//   } else {
//     background(0);
//   }
// var distance = dist(mouseX,mouseY,pmouseX,pmouseY);
// var scaled = map(distance, 0, width, 0, 20);
//  strokeWeight(scaled);
//  line(mouseX,mouseY,pmouseX,pmouseY);
// }
//

var capture;

function setup() {
  // video
createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();

  imageMode(CENTER);


function draw() {
  background(200,244,124);


  image(capture, 0, 0, 640, 480);


    if (keyPressed(LEFT_ARROW)) {
      filter(THRESHOLD);
    }

    if (keyPressed(RIGHT_ARROW)) {
      filter(OPAQUE);
    }

    if (keyPressed(UP_ARROW)) {
      filter(INVERT);
    }

    if (keyPressed(DOWN_ARROW)) {
      filter(POSTERIZE);
    }


  }



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
