class Bin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.image=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      //rectMode(CENTER);

      //fill("cyan");

      //rect(this.body.position.x, this.body.position.y, this.width, this. height,this.image);
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, -40, 100, 100);
        pop();
     

    }
  };