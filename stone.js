class Stone{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      fly(){
        this.body = null;
    }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}