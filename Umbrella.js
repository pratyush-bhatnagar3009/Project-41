class Umbrella {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 3;
      this.clr = color(200, 255, 80);
      this.umbrellaimage = loadImage("umbrella.png");
    }

    display() {
      fill(this.clr);
      image(this.umbrellaimage,mouseX, mouseY); 
    }
 
  }