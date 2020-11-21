class Dustbin{

    constructor(x,y,width,height){

        var options = {
            isStatic:true
        }
        this.image = loadImage("dustbin.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){

        var dustbinpos = this.body.position;
        imageMode(CENTER);
        image(this.image, 1100, 500, this.width, this.height);
        fill(255,255,255);

    }

}