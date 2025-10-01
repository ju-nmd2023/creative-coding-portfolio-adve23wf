// Code of flow field inspired by Pixelkind: https://codepen.io/pixelkind/pen/OJrRzOm
function setup() {
  createCanvas(innerWidth, innerHeight);

  background(255);
  field = generateField();
  generateAgents();
}
class Lines {
  constructor(x, y, speed, maxForce) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.speed = speed;
    this.maxForce = maxForce;
  }

  direction(desiredDirection) {
    desiredDirection = desiredDirection.copy();
    desiredDirection.mult(this.speed);
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }
  applyForce(force) {
    this.acceleration.add(force);
  }
  update() {
    this.lastPosition = this.position.copy();
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.speed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    }
  }

  draw() {
    push();

    strokeWeight(1);
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }
}

function generateField() {
  let field = [];
  noiseSeed(Math.random() * 100);
  for (let x = 0; x < column; x++) {
    field.push([]);
    for (let y = 0; y < rows; y++) {
      const value = noise(x / divider, y / divider) * Math.PI * 2;
      field[x].push(p5.Vector.fromAngle(value));
      let start = createVector(x * cellSize, y * cellSize);
    }
  }
  return field;
}

function generateAgents() {
  for (let i = 0; i < 1000; i++) {
    let linepart = new Lines(
      Math.random() * innerWidth,
      Math.random() * innerHeight,

      2,
      1
    );
    lineparts.push(linepart);
  }
}

const cellSize = 100;
const centerField = cellSize / 2;
const column = Math.ceil(innerWidth / cellSize);
const rows = Math.ceil(innerHeight / cellSize);
const divider = 2;

let lineparts = [];
function draw() {
  for (let linepart of lineparts) {
    const x = Math.floor(linepart.position.x / cellSize);
    const y = Math.floor(linepart.position.y / cellSize);
    const desiredDirection = field[x][y];
    linepart.direction(desiredDirection);
    linepart.update();
    linepart.checkBorders();
    linepart.draw();
  }
}
