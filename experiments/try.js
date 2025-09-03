function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

function draw() {
  background(255, 255, 255);
  for (let y = 0; y < 10; y++) {
    let x = random(width);
    let x1 = random(0, 500);
    line(x, y * 40 + 40, x1, y * 40 + 40);
  }

  /*  for (let i = 0; i < 10; i++) {
    let x = random(width / 2);
    let y = random(height / 2);
    let X = random(width / 2);
    let Y = random(height / 2);
    line(x, y, X, Y);
  }*/

  for (let x = 20; x < 500; x = x + 140) {
    for (let y = 20; y < 400; y = y + 140) {
      line(x, y, random(width), random(height));
    }
  }

  stroke(255, 0, 0);
  let x5 = random(0, 200);
  let x6 = random(0, 200);
  line(x5 + 40, 300, x6, 300);

  noLoop();
}
