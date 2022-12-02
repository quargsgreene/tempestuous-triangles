let img;
let sound;
let triangleDisplay;

function preload() {
  img = loadImage('backgroundImage.jpg');
  sound = loadSound('Special.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
  // lyric
  const message = createP('Tree');
  message.position(width / 8, height / 8);
  message.class('message');

  const button = createButton('Sliver');
  button.position((3 * width) / 4, height / 8);

  // play audio snippet
  function soundControl(audio) {
    if (!audio.isPlaying()) {
      audio.play();
      button.html('No!');
    } else {
      audio.pause();
      button.html('Sliver');
    }
  }

  button.mousePressed(() => {
    soundControl(sound);
  });
  // invisible button
  const invisibleButton = createButton(':/)');

  invisibleButton.position(width / 4, height / 4);
  invisibleButton.class('invisible');
  invisibleButton.mousePressed(hiddenAlert);

  triangleDisplay = new Triangle();

  // sentence
  const sentence = createP('I sat near droves of tents under bridges, and he, near a place where sentient beings used to disappear.');
  sentence.position(width / 10, height / 2);
  sentence.class('sentence');

  // clock
  function displayClock() {
    const hours = hour();
    const minutes = minute();
    const offset = floor(random(4));
    const clock = createElement('time', `${abs(hours - offset)}:${minutes}`);
    clock.position(random(width), random(height));
    clock.class('clock');
    if (minutes < 10) {
      clock.html(
        `${abs(hours - offset)}:0${minutes}`,
        0,
        random(200),
        random(400),
      );
    } else {
      clock.html(
        `${abs(hours - offset)}:${minutes}`,
        0,
        random(200),
        random(400),
      );
    }
    setInterval(displayClock, 60000);
  }

  displayClock();
}

function draw() {
  triangleDisplay.display();

  push();

  // lines
  push();
  strokeWeight(0.5);

  for (let i = 0; i < 20; i++) {
    stroke(150);
    line(width / 4 + 2 * i, 0, width / 4 + 2 * i, height);
  }
  for (let i = 0; i < 50; i++) {
    stroke(25);
    line(0, (3 * height) / 4 + 2 * i, width, (3 * height) / 4 + 2 * i);
  }

  pop();

  // number
  const col = color(random(255));
  fill(col);
  stroke(25);
  strokeWeight(0.2);
  textSize(random(1, 12));
  text('Silly', random(width), random(height));

  // blob
  scale(2);
  translate(width / 4, height / 8);
  blobVortex((width + height) / 80);
}

function blobVortex(number) {
  const from = color(148, 196, 2);
  push();
  const to = color(0);
  const between = lerpColor(from, to, sin(millis() / 1000));

  stroke(between);
  strokeWeight(number / 20);
  noFill();
  const xPos = number + width / (2 * number);
  const yPos = number + height / (2 * number);
  const ellipseWidth = number * (number - 2);
  const ellipseHeight = number * (number - 1);
  ellipse(xPos, yPos, ellipseWidth, ellipseHeight);

  const newNumber = number - 1;
  if (newNumber > 0) {
    blobVortex(newNumber);
  }
  pop();
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  background(img);
}

// hidden text
function hiddenAlert() {
  alert('qmwnebrvtcyxuz check somewhere else!\ qmwnebrvtcyxuz qmwnebrvtcyxuz qmwnebrvtcyxuz qmwnebrvtcyxuz\ qmwnebrvtcyxuz err err arr orr');
}

class Triangle {
  constructor() {
    this.x1 = width / 3;
    this.y1 = height / 3;
    this.x2 = width / 2;
    this.y2 = height / 2;
    this.x3 = width / 3;
    this.y3 = (3 * height) / 4;
    this.r = 10;
  }

  display() {
    push();
    fill(232, 93, 0, 5);
    const firstPointX = this.x1 + mouseX;
    const firstPointY = this.y1 + mouseY;
    const secondPointX = this.x2 + mouseX;
    const secondPointY = this.y2 + mouseY;
    const thirdPointX = this.x3 + mouseX;
    const thirdPointY = this.y3 + mouseY;
    triangle(firstPointX, firstPointY, secondPointX, secondPointY, thirdPointX, thirdPointY);
    pop();

    push();
    fill(225, 20);
    circle(this.x1 + mouseX, this.y1 + mouseY, this.r * sin(mouseX));
    pop();

    push();
    fill(0, 92, 0, 20);
    circle(this.x2 + mouseX, this.y2 + mouseY, this.r * cos(mouseY));
    pop();

    push();
    fill(91, 2, 173, 30);
    circle(this.x3 + mouseX, this.y3 + mouseY, this.r);
    pop();
  }
}
