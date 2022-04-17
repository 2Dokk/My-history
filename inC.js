let mic, fft;
let result = 1000;
let checkIncline = true;

function setup() {
  createCanvas(710, 400);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  let saveValue = [];
  let saveIndex = [];
  let savePoint = [];
  let indexValue = [];
  background(200);

  let spectrum = fft.analyze();
  for (var i = 1; i < 1024; i++) {
    if (spectrum[i] - spectrum[i - 1] >= 0) {
      checkIncline = true;
    } else if (spectrum[i] - spectrum[i - 1] < 0 && checkIncline == true) {
      checkInline = false;
      savePoint.push(i - 1);
    } else {
      checkInline = false;
    }
  }
  for (let i = 0; i < savePoint.length; i++) {
    indexValue.push(spectrum[savePoint[i]]);
  }
  for (let i = 0; i < 10; i++) {
    let max = Math.max(...indexValue);
    saveValue.push(max);
    let ind = indexValue.indexOf(max);
    indexValue.filter((v) => v !== max);
    saveIndex.push(savePoint[ind]);
    savePoint.splice(ind, 1);
  }
  saveIndex.sort();
  for (let i = 1; i < 10; i++) {
    if (abs(saveIndex[i] - saveIndex[i - 1]) < result) {
      result = abs(saveIndex[i] - saveIndex[i - 1]);
    }
  }
  print(result);
}
