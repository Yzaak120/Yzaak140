let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 100; i++) {
    circles.push(new Circle(random(width), random(height), random(20, 50)));
  }
}

function draw() {
  background(30);
  for (let circle of circles) {
    circle.move();
    circle.display();
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(random(255), random(255), random(255));
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }w
  
  display() {
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}
