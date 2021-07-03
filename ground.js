class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 700;
        this.height = 110;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(rgb(244, 244, 244));
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}