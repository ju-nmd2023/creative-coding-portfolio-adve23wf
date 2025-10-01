function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

const size = 10;
const size2 = 50;
const amount = 4;
const amount2 = 4;
let amount3;
const gap = 80;

function drawFlower() {
  let leafs = random(200, 360);
  noFill();
  stroke(0);
  rectMode(CENTER);

  for (k = 0; k < random(5, 15); k++) {
    push();
    rotate(k * leafs);
    ellipse(0, 0, size, size2);
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
      drawFlower(x, y);
      pop();
      x += size + gap;
    }
    y += size2 + gap;
  }
}
