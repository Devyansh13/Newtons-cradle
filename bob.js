class Bob{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            'restitution':1.2,
            'friction':0,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y,radius,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("aqua")
        ellipse(0,0,20);
        pop();
      }
}