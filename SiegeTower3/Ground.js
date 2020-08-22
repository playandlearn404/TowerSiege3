class Ground {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1000,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
    //   switch (Math.floor(Math.random() * 11)) {
    //       case 1:
    //           fill("blue");
    //           break;
    //       case 2:
    //           fill("red");
    //           break;
    //       case 3:
    //           fill("green");
    //           break;
    //       case 4:
    //           fill("RebeccaPurple");
    //           break;
    //       case 5:
    //           fill("gold");
    //           break;
    //       case 6:
    //           fill("indianred");
    //           break;
    //       case 7:
    //           fill("SpringGreen");
    //           break;
    //       case 8:
    //           fill("hotpink");
    //           break;
    //       case 9:
    //           fill("lightsalmon");
    //           break;
    //       case 10:
    //           fill("c");
    //           break;
    //   }
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  