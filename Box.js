class Box{
    constructor(x,y,width,height,r,g,b){
        var options = {
            'restititution' : 0.8,
            'density' : 0.8,
            'friction' : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        this.visibility = 255;
        World.add(world,this.body);
    }

    score(){
        if(this.visibility < 0 && this.visibility > -10){
          score++;
        }
      }    

    display(){
        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(this.r,this.g,this.b);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5;
            //tint(255,this.visibilityS);
            //rect(this.body.positionX,this.body.positionY,this.width,this.height)
            pop();
        }
    }
}