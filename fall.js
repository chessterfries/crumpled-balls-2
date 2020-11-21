class Fall{

    constructor(x,y,width,height){

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){

        var dustbinpos = this.body.position;

        rectMode(CENTER);
        fill(255,255,255);
        rect(dustbinpos.x,dustbinpos.y,this.width,this.height);

    }

}