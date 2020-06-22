class Ground{
    constructor(x,y,width,height,r,g,b){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.r,this.g,this.b);
        rect(pos.x,pos.y,this.width,this.height);
    }
}