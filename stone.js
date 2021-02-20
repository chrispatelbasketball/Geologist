class Stone{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution': 0.8,
            'friction':1.0,
            'density': 12
        }
        this.body = Bodies.rectangle(x,y,80,80,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        rectMode(CENTER);
        fill("black");
        rect(0,0, this.width, this.height);
        pop();
      }
}