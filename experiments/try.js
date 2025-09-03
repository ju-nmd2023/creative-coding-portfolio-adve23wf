function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

function draw() {
  background(255, 255, 255);
  for (let y = 0; y < 10; y++) {
    let x = random(width);
    let x1 = random(width);
    line(x, y * 40 + 40, x1, y * 40 + 40);
  }

  for (let i = 0; i < 10; i++) {
    let x = random(width / 2);
    let y = random(height / 2);
    let X = random(width / 2);
    let Y = random(height / 2);
    line(x, y, X, Y);
  }

  noLoop();
}
