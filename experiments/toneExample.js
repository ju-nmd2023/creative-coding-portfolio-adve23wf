//Code inspired by: https://codepen.io/pixelkind/pen/eYbWyVW

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
}
let synth;
let analyser;
window.addEventListener("load", () => {
  synth = new Tone.MonoSynth({
    oscillator: { type: "square" },
    envelope: { attack: 0.5, decay: 0.4, sustain: 0.5, release: 1 },
  }).toDestination();

  analyser = new Tone.Analyser("waveform", 1024);
  synth.connect(analyser);

  const keys = [
    "A3",
    "A4",
    "C3",
    "C4",
    "E3",
    "E4",
    "G3",
    "G4",
    "B3",
    "B4",
    "D3",
    "D4",
    "F3",
    "F4",
  ];
  const loop = new Tone.Loop((time) => {
    let key = random(keys);
    synth.triggerAttackRelease(key, time);
  }, "5n").start(0);

  Tone.Transport.start();
});

function draw() {
  background(0);
  noFill();
  stroke(255);

  let values = analyser.getValue();

  beginShape();
  for (let j = 0; j < values.length; j++) {
    let x = map(j, 1, values.length, 1, innerWidth);
    let y = map(values[j], -1, 5, innerHeight / 2, 1);

    ellipse(x, y, 2);
  }
  endShape();
}
