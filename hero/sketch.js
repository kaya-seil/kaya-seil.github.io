var teapot;
var soundFile;

function preload() {
  teapot = loadModel('hero/Heart_.obj');
  soundFile = loadSound('hero/heart.mp3');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("intro");

  amplitude = new p5.Amplitude();

  soundFile.loop();
  soundFile.setVolume(0.4);
}

function draw() {

  orbitControl();
  background("#f6f6f6");
  amplitude.smooth(0.9);

  var volume = amplitude.getLevel();
  size = map(volume + 0.5, 0, 1.0, 25, 50);

  rotateX(3.1);

  if (!mouseIsPressed)
    rotateY(frameCount * 0.01);

  scale(size);
  model(teapot);

  if (mouseY > height && soundFile.isPlaying()) {
    soundFile.pause();
  } else if (mouseY < height && soundFile.isPaused()) {
    soundFile.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}