function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

function draw() {
  background(255, 255, 255);

  // Code inspiration from: https://editor.p5js.org/amcc/sketches/y9kCapTaZ
  stroke(0, random(255));

  for (i = 0; i < 5000; i++) {
    line(random(width), random(height), random(width), random(height));
  }
  //noLoop();
}
//noLoop();
