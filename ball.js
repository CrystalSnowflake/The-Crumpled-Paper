class Ball{
    constructor(x, y, radius){
        var options = {
            restitution: 0.3,
            isStatic: false,
            density: 1.4,
            friction: 0.5
         }

         this.ball = Bodies.circle(x, y, radius, options);
         this.radius = radius;
         World.add(world, this.ball)
    } 

    display(){
        var ball = this.ball.position;
        
        fill("yellow");

        circle(ball.x, ball.y, this.radius)
    }
}