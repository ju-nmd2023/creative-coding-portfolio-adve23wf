function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

const size = 30;
const amount = 5;
const amount2 = 15;
const gap = 20;

function draw() {
  // isnpared by https://codepen.io/pixelkind/pen/bGOEmaV
  rectMode(CENTER);
  let y = (height - size * amount2) / 4;

  for (i = 0; i < amount2; i++) {
    let x = (width - size * amount) / 4;

    for (j = 0; j < amount; j++) {
      push();
      let rot = random(0, size);
      let rot2 = random(0, size);
      translate(0 + rot, 0 + rot2);
      square(x, y, size);
      x += size;
      pop();
    }
    y += size;
  }

  noLoop();
}
