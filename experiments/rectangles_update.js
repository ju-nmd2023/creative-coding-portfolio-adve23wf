function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

const size = 30;
const amount = 5;
const amount2 = 15;
const gap = 20;

function draw() {
  // inspired by https://codepen.io/pixelkind/pen/bGOEmaV
  //inspired by https://youtu.be/mCZ76eymEKU?si=XCaWnbxoSKC_uoN_
  //Code for color inspired by: https://youtu.be/mGsYV9jt010?si=BdKlvMDeix-BowJ5
  rectMode(CENTER);
  let y = (height - size * amount2) / 2;

  for (i = 0; i < amount2; i++) {
    let x = (width - size * amount) / 2;
    for (j = 0; j < amount; j++) {
      push();
      let rot = random(0, size);
      let rot2 = random(0, size);
      translate(0 + rot, 0 + rot2);
      fill((i / (amount2 - 1)) * 255, 63, 45);
      square(x, y, size);
      x += size;
      pop();
    }
    y += size;
  }

  noLoop();
}
