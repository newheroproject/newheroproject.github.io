let balls = [];

let colors = ["#FF00FF", "#00FFFF"];

function setup() {
  let c = createCanvas(window.innerWidth, window.innerHeight);
  c.parent(document.querySelector(".p5canvas"));
  for (let i = 0; i < 100; i++) {
    balls.push(new Ball(random(0, window.innerWidth), random(0, window.innerHeight), random(0, 150), createVector(random(-1, 1), random(-1, 1)), random(colors), true));
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(31);
  noStroke();
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].checkDied()) {
      balls[i] = new Ball(random(0, window.innerWidth), random(0, window.innerHeight), random(0, 150), createVector(random(-1, 1), random(-1, 1)), random(colors), false);
    }
    balls[i].show();
    balls[i].update();
  }
}
function Ball(_x, _y, _r, _s, _c, _checkCR) {
  this.x = _x;
  this.y = _y;
  this.r = _r;
  this.currentR = _checkCR ? random(0, _r - 10) : 0;
  this.speed = _s;
  this.color = _c;
  this.hasPeaked = false;
  this.show = () => {
    fill(this.color);
    ellipse(this.x, this.y, this.currentR, this.currentR);
  };

  this.update = () => {
    this.x += this.speed.x;
    this.y += this.speed.y;

    if (!this.hasPeaked && this.currentR > this.r) {
      this.hasPeaked = true;
    }

    if (!this.hasPeaked) {
      this.currentR += 0.1;
    } else {
      this.currentR -= 0.1;
    }
  };

  this.checkDied = () => {
    if (!this.hasPeaked) {
      if (this.x - this.currentR > width || this.x + this.currentR < 0 || this.y - this.currentR > height || this.y + this.currentR < 0) {
        return true;
      }
      return false;
    }
    if (this.hasPeaked && this.currentR > 0) {
      return false;
    }
    if (this.hasPeaked && this.currentR <= 0) {
      return true;
    }
  };
}
