let mic, fft;
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
  let result = 1000;
  let saveIndex = [];
  let savePoint = [];
  let indexValue = [];
  background(200);

  let spectrum = fft.analyze();
  for (var i = 1; i < spectrum.length; i++) {
    if (spectrum[i] - spectrum[i - 1] >= 0) {
      checkIncline = true;
    } else if (spectrum[i] - spectrum[i - 1] < 0 && checkIncline == true) {
      checkIncline = false;
      savePoint.push(i - 1);
    } else {
      checkIncline = false;
    }
  }
  for (let i = 1; i < savePoint.length; i++) {
    let m = savePoint[i] - savePoint[i - 1];
    if (m < 10) {
      savePoint.splice(i - 1, 1);
    }
  }
  print(savePoint);
  for (let i = 0; i < savePoint.length; i++) {
    indexValue.push(spectrum[savePoint[i]]);
  }
  for (let i = 0; i < 10; i++) {
    let max = Math.max(...indexValue);
    let ind = indexValue.indexOf(max);
    indexValue.filter((v) => v !== max);
    saveIndex.push(savePoint[ind]);
    savePoint.splice(ind, 1);
  }
  saveIndex.sort(function (a, b) {
    return a - b;
  });
  print("saveIndex :", saveIndex);
  for (let i = 1; i < 10; i++) {
    if (abs(saveIndex[i] - saveIndex[i - 1]) < result) {
      result = abs(saveIndex[i] - saveIndex[i - 1]);
    }
  }
  print(result);
}
