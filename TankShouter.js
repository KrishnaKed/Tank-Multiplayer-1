class TankSooter{
    constructor(x, y, width, height,angle) {
        var options = {
            'friction':0.5,   
        }
        this.body = Bodies.rectangle(x, y, width, height,angle, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/TankSooter.png");
        World.add(world, this.body);
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