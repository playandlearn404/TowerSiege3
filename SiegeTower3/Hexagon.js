class Hexagon {
    constructor(x, y, radius) {
      var options ={ 
          isStatic: false, 
        'restitution':1.0,
       'friction':1.0, 
       'density' : 1.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 25;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("crimson");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  