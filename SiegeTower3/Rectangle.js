class Rectangle extends BaseClass {
    constructor(x, y, fill){
        super(x, y, 50, 75, fill);
        this.visibility = 255;
      }
      display() {
        if (this.body.speed < 3) {
          super.display();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -10;
          tint(255, this.visibility);
          pop();
        }
    }
    score() {
      if(this.visibility<0 && this.visibility>-105) {
        score++;
      }
    }
}