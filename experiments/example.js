function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

function draw() {
  let x = random(width);
  let y = random(height);
  background(255, 255, 255);
  // let lenght = random(50, 100);
  // Code inspiration from: https://editor.p5js.org/amcc/sketches/y9kCapTaZ

  for (i = 0; i < 1000; i++) {
    stroke(random(200), random(0), 0);

    line(random(x), random(y), random(200, 500), random(100, 400));
  }

  noLoop();
}

noLoop();
