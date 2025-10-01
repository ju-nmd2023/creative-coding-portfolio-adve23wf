function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

const size = 5;
const size2 = 60;
const amount = 50;
const amount2 = 50;
const amount3 = 10;
const gap = 60;
let value = 0;
let x;
let y;
let speed = 5;
function drawFlower() {
  let leafs = random(20, 360);
  noFill();

  rectMode(CENTER);

  for (k = 0; k < amount3; k++) {
    push();
    rotate(k * leafs);
    rect(0, 0, size, size2, 2);
    pop();
  }

  noLoop();
}

//ChatGPT helped to found the mistake for translate, to fix the drawing.
function draw() {
  let y = (height - size2 * amount2 - gap * (amount - 1)) / 2;
  for (i = 0; i < amount2; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (j = 0; j < amount; j++) {
      push();
      translate(x, y);
      stroke(255, random(255), random(50));
      drawFlower(x, y);
      pop();

      x += size + gap;
    }
    y += size2 + gap / 2;
  }
}
