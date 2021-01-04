class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;   
    }

    display(){
        var jos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(jos.x,jos.y,this.width,this.height);
    }
}