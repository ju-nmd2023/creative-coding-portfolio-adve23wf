//Code inspired by: https://youtu.be/MzhBizCmpi8?si=iVXlGdHl3xrTYjCx

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  background(0);
}
let angle = 0;
function draw() {
  background(0);

  noFill();

  translate(innerWidth / 2, innerHeight / 2);

  stroke(255, 50, 150);

  beginShape();
  for (let i = 0; i < 350; i++) {
    let r1Min = map(sin(angle * 2), 1, -1, 20, 100);
    let r1Max = map(sin(angle / 2), 1, -1, 100, 20);

    let r2Min = map(sin(angle / 2), 1, -1, 90, 50);
    let r2Max = map(sin(angle * 2), 1, -1, 100, 120);

    let r1 = map(sin(i * 8), -1, 1, r1Min, r1Max);
    let r2 = map(sin(i * 10), -1, 1, r2Min, r2Max);
    let r = r1 + r2;
    let x = r * sin(i);
    let y = r * cos(i);
    angle += 0.01;
    vertex(x, y);
  }
  endShape(CLOSE);
} // noLoop();
