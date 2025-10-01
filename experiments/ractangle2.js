function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

const size = 30;
const amount = 5;
const amount2 = 20;
const gap = 20;
const move = 5;

function draw() {
  // Code inspired by https://codepen.io/pixelkind/pen/bGOEmaV
  //Code inspired by https://youtu.be/mCZ76eymEKU?si=XCaWnbxoSKC_uoN_
  rectMode(CENTER);
  fill(0, 0, 139);

  let y = (height - size * amount2) / 2;

  for (i = 0; i < amount2; i++) {
    let x = (width - size * amount) / 2;

    for (j = 0; j < amount; j++) {
      push();
      let rot = pow(random(-(i / amount2), i / amount2) * 6, 2) * size;
      let rot2 = pow(random(-(i / amount2), i / amount2) * 4, 2) * size;
      translate(x + rot, y + rot2);
      //  let rotation = random(0, HALF_PI * pow(-i / amount2) * 2);
      let rotation = random(0, HALF_PI * (-i / amount2));

      rotate(rotation);
      square(0, 0, size);
      x += size;
      pop();
    }
    y += size;
  }

  noLoop();
}
