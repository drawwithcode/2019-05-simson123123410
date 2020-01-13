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
let mic, capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);
  rectMode(CENTER);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200,244,124);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();


  image(capture, random(vol*2000)+width/2,random(vol*2000)+height/2, width, height);

  if (keyIsDown(LEFT_ARROW)) {
      filter(INVERT);
    }

    if (keyIsDown(RIGHT_ARROW)) {
      filter(BLUR);
    }

    if (keyIsDown(UP_ARROW)) {
      filter(THRESHOLD);
    }

    if (keyIsDown(DOWN_ARROW)) {
      filter(GRAY);
    }

}
