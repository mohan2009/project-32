class Platform{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
      //  var angle=this.body.angle
        var pos = this.body.position;
      //  translate(pos.x,pos.y)
       // rotate(angle)
        fill(64, 45, 38);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}