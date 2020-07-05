class Drops {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.xspd = 0
      this.position = createVector(this.x, this.y);
      this.yspd = random(9, 10)
      this.size = 3;
      this.clr = color(255, random(150));
    }
    display() {
      fill(this.clr);
      stroke(this.clr);
      ellipse(this.x, this.y, this.size, this.size);
      ellipse(this.x, this.y, this.size * 0.5, this.size) * 0.3;
    }
    move() {
      this.x = this.x + this.xspd + random(-0.3, 0.3);
      this.y = this.y + this.yspd;
    }
    removeRain() {
      fill(0);
    }
  }
