function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

const randomDisplacement = 15;
const rotateMultiplier = 20;
const size = 30;
const amount = 5;
const amount2 = 15;
const gap = 20;

function draw() {
  //https://codepen.io/pixelkind/pen/bGOEmaV
  let y = (height - size * amount2) / 2;

  for (i = 0; i < amount2; i++) {
    let x = (width - size * amount) / 2;

    for (k = 0; k < amount; k++) {
      square(x, y, size);
      x += size;
    }
    y += size;
  }

  noLoop();
}
