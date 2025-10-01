function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

//Inspiration from Vera Molnar
// Code inspired by: https://editor.p5js.org/amcc/sketches/y9kCapTaZ
function draw() {
  background(255, 255, 255);
  stroke(255, 46, 89, 20);
  rect(600, 200, 150);
  rect(800, 200, 150);
  rect(600, 400, 150);
  rect(800, 400, 150);
  stroke(0);
  for (let i = 0; i < 50; i++) {
    //   stroke(0, 25, 249);
    line(
      random(610, 750),
      random(210, 350),
      random(610, 750),
      random(210, 350)
    );
    //  stroke(40, 200, 149);
    line(
      random(800, 950),
      random(200, 350),
      random(800, 950),
      random(200, 350)
    );
    //  stroke(0);
    line(
      random(600, 750),
      random(400, 550),
      random(600, 750),
      random(400, 550)
    );
    //stroke(140, 250, 49);
    line(
      random(800, 950),
      random(400, 550),
      random(800, 950),
      random(400, 550)
    );
  }
  noLoop();
}
noLoop();
