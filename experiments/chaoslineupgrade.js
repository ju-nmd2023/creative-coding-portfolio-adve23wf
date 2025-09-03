function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

function draw() {
  background(255, 255, 255);
  stroke(random(50, 255));
  // inspiration from: https://editor.p5js.org/emmajaneculhane/sketches/byLzv7uNz
  for (let y = 20; y < height; y = y + 20) {
    for (let x = 20; x < width; x = x + 20) {
      line(x, y, random(width), random(height));
    }
  }
}
