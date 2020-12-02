class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':0.6,
      }
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      

      World.add(world, this.body);
      }
    display(){
      //ellipseMode(RADIUS);
  
      //fill("yellow");
  
      //circle(this.body.position.x, this.body.position.y, this.radius);

      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
    };