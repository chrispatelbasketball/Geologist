class Rubber{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution': 0.3,
            'friction': 5,
            'density': 2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.width = 80;
        this.height = 80;
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        ellipseMode(CENTER);
        fill("black");
        ellipse(0,0, this.width, this.height);
        pop();
      }
}