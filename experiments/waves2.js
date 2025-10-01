//Code inspired by: https://youtu.be/MzhBizCmpi8?si=iVXlGdHl3xrTYjCx
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
}
let angle = 0;
let amount = 16;
function draw() {
  background(50);
  strokeWeight(4);
  noFill();

  translate(width / 2, height / 2);

  for (let j = 0; j < amount; j++) {
    stroke(120 - j * 150, 250 - j * 80, 200 - j * 440);

    angle += 0.2;

    beginShape();
    for (let i = 0; i < 360; i++) {
      let r1Min = map(sin(angle), 0, 1, 50, 100);
      let r1Max = map(sin(angle * 2), 0, 1, 100, 20);

      let r2Min = map(sin(angle / 2), -1, 1, 120, 50);
      let r2Max = map(sin(angle), -1, 1, 120, 100);

      let r1 = map(sin(i * 14), 1, -1, r1Min, r1Max);
      let r2 = map(sin(i * 6 + 290), 1, -1, r2Min, r2Max);
      let r = r1 + r2 - j * 20;
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
